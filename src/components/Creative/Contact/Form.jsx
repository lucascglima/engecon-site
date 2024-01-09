import { useState, createRef } from "react";
import { useRouter } from "next/router";
import InputMask from "react-input-mask";

const Form = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phoneNumber: "",
    subject: "",
    message: "",
  });

  const [errMessage, setErrMessage] = useState(null);
  const [sendMessage, setSendMessage] = useState("");
  const [btnText, setBtnText] = useState("Enviar");

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
    if (formValues.company.length < 5) {
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
  const url = () => {
    if (router.asPath == "/") {
      return { url: "/api/contact", pathname: "/" };
    } else if (router.asPath == "/recovery-structural-reinforcement") {
      return {
        url: "/api/structural",
        pathname: "/recovery-structural-reinforcement",
      };
    } else if (router.asPath == "/raa-treatment") {
      return { url: "/api/raa", pathname: "/raa-treatment" };
    } else if (router.asPath == "/reinforcement-of-coffin-building") {
      return {
        url: "/api/coffin",
        pathname: "/reinforcement-of-coffin-building",
      };
    } else if (router.asPath == "/impermeabilization") {
      return {
        url: "/api/impermeabilization",
        pathname: "/impermeabilization",
      };
    }
  };
  const handleSubmit = async (values) => {
    values.preventDefault();

    //= Validate Form
    if (!validateForm(formData)) return;
    setSendMessage("Aguarde um momento, estamos enviando sua mensagem.");
    setBtnText("Enviando...");
    fetch(url().url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        setFormData({
          name: "",
          email: "",
          phoneNumber: "",
          company: "",
          subject: "",
          message: "",
        });
        setSendMessage("Mensagem enviada com sucesso!");
        setBtnText("Enviar");
      })
      .catch((error) => {
        console.log(error);
        // setSendMessage(
        //   "Não foi possível enviar sua mensagem, entre em contato pelo nosso whatsapp."
        // );
      });
    setTimeout(() => {
      setSendMessage("");
    }, 5000);
    // router.push({
    //   pathname: "/",
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
          <svg
            src="https://www.engeconrecife.com.br/img/logo-preta.svg"
            alt="Engecon Engenharia"
          ></svg>
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
                      id="form_subject"
                      type="text"
                      name="subject"
                      placeholder="Assunto"
                      required="required"
                      onChange={handleChange}
                      value={formData.subject}
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
                      mask="(99) 99999-9999"
                      placeholder="Telefone (Whatsapp)"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_company"
                      type="text"
                      name="company"
                      placeholder="Empresa"
                      required="required"
                      onChange={handleChange}
                      value={formData.company}
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
                  <div className="text-center mt-20 w-600">
                    <span>{sendMessage}</span>
                  </div>
                </div>
                <div className="col-12">
                  <div className="text-center mt-40  ">
                    <button
                      type="submit"
                      onClick={handleSubmit}
                      className={
                        btnText != "Enviar" ? "btn-send-disabled" : "green-bg"
                      }
                      aria-disabled={sendMessage}
                      disabled={sendMessage}
                    >
                      <span>{btnText}</span>
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
