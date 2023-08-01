import '../assets/scss/components/Button.scss'

const Button = ({ text, onClick, className }) => {
  return (
    <button className='button-config' onClick={onClick}>{text}</button>
  )
}

export default Button