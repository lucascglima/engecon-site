import { useState } from "react";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";
const Form = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errMessage, setErrMessage] = useState(null);

  const validateForm = (formValues) => {
    if (!formValues.name || !formValues.email || !formValues.message) {
      setErrMessage("Por favor preencha todos os campos");
      return false;
    }
    if (formValues.name.length < 5) {
      setErrMessage("O nome deve ter pelo menos 5 caracteres");
      return false;
    }
    if (formValues.subject.length < 5) {
      setErrMessage("O assunto deve ter pelo menos 5 caracteres");
      return false;
    }
    if (formValues.message.length < 10) {
      setErrMessage("A mensagem deve ter pelo menos 10 caracteres");
      return false;
    }
    if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(formValues.email)) {
      setErrMessage("Email is invalid");
      return false;
    }
    return true;
  };

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (values) => {
    // const router = useRouter();
    values.preventDefault();

    //= Validate Form
    if (!validateForm(formData)) return;
    await fetch("/api/contact", {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },

      body: JSON.stringify(formData),
    }).then((res) => {
      console.log(res, "response economy");
      setFormData({
        name: "",
        email: "",
        phoneNumber: "",
        subject: "",
        message: "",
      });
    });
    // router.push({
    //   pathname: "/home-main",
    // });

    //= Clear Error Message
    setErrMessage("");

    //= Sumbit The Form
    // document.forms[0].submit();
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-11">
          <div className="box-shadow to-up">
            <form id="contact-form" method="post" action="contact.php">
              {errMessage && <div className="messages">{errMessage}</div>}

              <div className="controls row">
                <div className="col-12">
                  <div className="mb-40">
                    <h5 className="fw-600">Entre em contato</h5>
                  </div>
                </div>

                <div className="col-lg-6 md-mb30">
                  <div className="form-group mb-30">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Nome"
                      required="required"
                      onChange={handleChange}
                      value={formData.name}
                    />
                  </div>

                  <div className="form-group mb-30">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                      onChange={handleChange}
                      value={formData.email}
                    />
                  </div>
                  <div className="form-group mb-30">
                    <InputMask
                      id="form_phoneNumber"
                      type="tel"
                      name="phoneNumber"
                      required="required"
                      maskPlaceholder={null}
                      mask="(99) 99999-9999"
                      placeholder="Telefone (Whatsapp)"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Empresa"
                      required="required"
                      onChange={handleChange}
                      value={formData.subject}
                    />
                  </div>
                </div>

                <div className="col-lg-6">
                  <div className="form-group sam-height">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Mensagem"
                      rows="4"
                      required="required"
                      onChange={handleChange}
                      value={formData.message}
                    ></textarea>
                  </div>
                </div>

                <div className="col-12">
                  <div className="text-center mt-40  ">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className="green-bg"
                    >
                      <span>Enviar</span>
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
