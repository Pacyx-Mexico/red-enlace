import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


export const MainSiniestroGM = () => {
  const [ step, setStep] = useState(1) 

  const [formData1, setFormData1] = useState({
    NoContrato: "",
    lastName: "",
    age: "",
    email: ""
  })

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };
  return (
    <>
      <Navbar type="productos" />
      <Footer />
    </>
  )
}
