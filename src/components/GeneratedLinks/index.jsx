import GeneratedLink from '../GeneratedLink'

const Form = ({ links }) => {
  return (
    <section className="pt-6 pb-12 bg-violet-light">
        <div 
          className="relative max-w-6xl mx-auto px-5"
        >
          <div className="space-y-6">
            {links.map(link => (
              <GeneratedLink key={link.id} link={link} />
            ))}
          </div>
        </div>
    </section>
  )
}

export default Form
