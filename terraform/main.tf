provider "aws" {
  region = "eu-central-1"
}
terraform {
  backend "s3" {
  }
}

data "aws_route53_zone" "selected" {
  name = "${var.domain}"
}

data "terraform_remote_state" "infra" {
  backend = "s3"

  config = {
    bucket = var.bucket
    key    = var.infra_statefile_key
    region = var.region
  }
}

module "service" {
  source                       = "git@github.com:dook/sfnf-infra.git//modules/terraform-aws-fargate"
  name_preffix                 = "${var.environment}-sfnf-portal-fe"
  region                       = "eu-central-1"
  vpc_id                       = var.vpc_id
  availability_zones           = [var.azs]
  public_subnets_ids           = var.public_subnets
  private_subnets_ids          = var.private_subnets
  access_cidr_list             = ["0.0.0.0/0"]
  port_lb_external             = "443"
  container_name               = "sfnf-portal-fe-${var.environment}"
  container_image              = "${var.ecr_registry}:${var.image_tag}"
  container_cpu                = 256
  container_memory             = 1024
  container_memory_reservation = 1024
  container_port               = 5000

  internal        = false
  certificate_arn = var.certificate_arn
  create_elb      = false
  elb_sg_id       = data.terraform_remote_state.infra.outputs.elb_sg_id

  environment = [
    {
      name  = "NODE_ENV"
      value = "production"
    }
  ]
}

resource aws_lb_listener_rule service {
  listener_arn = data.terraform_remote_state.infra.outputs.elb_https_listener_arn

  action {
    type             = "forward"
    target_group_arn = module.service.lb_target_group_arn
  }

  condition {
    host_header {
      values = [var.fqdn]
    }
  }
}

resource "aws_route53_record" "alb_public_web_endpoint" {
  zone_id = data.aws_route53_zone.selected.zone_id
  name    = var.fqdn
  type    = "A"

  alias {
    name                   = data.terraform_remote_state.infra.outputs.elb_dns_name
    zone_id                = data.terraform_remote_state.infra.outputs.elb_zone_id
    evaluate_target_health = true
  }
}
