import { useState } from 'react'
import { CopyToClipboard } from 'react-copy-to-clipboard'

const Form = ({ link }) => {
  const [isCopied, setIsCopied] = useState(false)

  const handleCopied = () => {
    setIsCopied(true)

    setTimeout(() => {
      setIsCopied(false)
    }, 1000)
  }

  return (
    <div 
      key={link.id} 
      className="p-6 space-y-3 md:space-y-0 flex flex-col md:flex-row md:justify-between md:items-center bg-white rounded-md leading-none"
    >
      <span className="flex-1 pr-4 text-black truncate">{link.destination}</span>

      <a 
        className="text-cyan hover:text-violet-dark transition-colors" 
        href={`https://${link.shortUrl}`} 
        target="_blank"
        rel="noreferrer"
      >
        {link.shortUrl}
      </a>

      <CopyToClipboard text={link.shortUrl}>
        <button 
          type="button"
          className="md:ml-6 md:px-8 py-3 md:py-4 text-white bg-cyan hover:bg-violet-grayish active:bg-violet-dark rounded-md transition-colors focus:outline-none"
          onClick={handleCopied}
        >
          {isCopied ? 'Copied!' : 'Copy'}
        </button>
      </CopyToClipboard>
    </div>
  )
}

export default Form
