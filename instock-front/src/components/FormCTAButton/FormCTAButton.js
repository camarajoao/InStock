import "./FormCTAButton.scss";

function FormCTAButton({ className, buttonText, type, action }) {
  return (
      <button onClick={action} type={type} className={`form-cta-button ${className}`}>{buttonText}</button>
  );
}

export default FormCTAButton;
