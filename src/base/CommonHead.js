import PropTypes from 'prop-types'

const CommonHead = ({ title }) => {
  return (
    <>
      <title>{title}</title>
      <meta name="description"
        content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
      />
        <meta name="robots" content="noindex" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:image" content="/og-image.png" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:url" content="https://fakehunter.pap.pl/" />
      <meta
        property="og:description"
        content="#FakeHunter to społeczny projekt weryfikacji treści publikowanych w internecie uruchomiony przez Polską Agencję Prasową wspólnie z GovTech Polska, którego celem jest demaskowanie nieprawdziwych wiadomości dotyczących wirusa SARS-CoV-2"
      />
    </>
  )
}

CommonHead.defaultProps = {
  title: '#FakeHunter - dołącz do walki z dezinformacją o SARS-COV-2'
}

CommonHead.propTypes = {
  title: PropTypes.string
}

export default CommonHead
