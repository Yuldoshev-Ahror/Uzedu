import React from "react";
import "./index.scss";
import MenuTitle from "../../components/MenuTitle";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, errors } = useForm();

  const hundleSendSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="my-contact-container">
      <div className="my-contact-content">
        <div className="my-contact-title">
          <MenuTitle title="BIZ BILAN BOG`LANING" />
        </div>
        <div className="my-contact-main">
          <div className="my-contact-mapform">
            <div>
              <h3>Biz bilan bog`laning</h3>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.4548513484806!2d69.20572734261475!3d41.277204173255875!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38ae8a3cca28d7e7%3A0x8aa381cdc52af12a!2sTts%20Integro!5e0!3m2!1suz!2s!4v1611748289773!5m2!1suz!2s"
                width="100%"
                height="60%"
                frameborder="0"
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
              ></iframe>
              <div>
                <p>
                  Ish kunlari Dushanbadan Jumagacha (9.00-18.00 soatlarda,
                  13.00-14.00 tushlik vaqti)
                </p>
                <p>Dam olish kunlari: Shanba, Yakshanba va Bayram kunlari</p>
                <p>
                  <span>Jamoat transportlari</span>
                </p>
                <p>
                  Avtobuslar: 28, 44, 46, 53, 57, 68, 78, 89, 91, 97, 115, 141,
                  148, 155
                </p>
              </div>
            </div>
            <div>
              <h3>Biz bilan bog`laning</h3>
              <form onSubmit={handleSubmit(hundleSendSubmit)}>
                <div className="my-contact-form">
                  <div>
                    <div>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        id="name"
                        ref={register({ required: true, minLength: 3 })}
                      />
                      {errors.name && errors.name.type === "required" && (
                        <p>Text requird</p>
                      )}
                      {errors.name && errors.name.type === "minLength" && (
                        <p>Min Length 3</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="email">E-mail</label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email"
                        id="email"
                        ref={register({ required: true })}
                      />
                      {errors.email && errors.email.type === "required" && (
                        <p>Text requird</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="text">Mavzu</label>
                      <input
                        type="text"
                        name="text"
                        placeholder="Text"
                        id="text"
                        ref={register({ required: true })}
                      />
                      {errors.text && errors.text.type === "required" && (
                        <p>Text requird</p>
                      )}
                    </div>
                    <div>
                      <label htmlFor="phone">Phone</label>
                      <input
                        type="number"
                        name="phone"
                        placeholder="Phone Number"
                        id="phone"
                        ref={register({ required: true })}
                      />
                      {errors.phone && errors.phone.type === "required" && (
                        <p>Text requird</p>
                      )}
                      {errors.phone && errors.phone.type === "minLength" && (
                        <p>Min length 9</p>
                      )}
                    </div>
                  </div>
                  <div className="my-contact-textarea">
                    <div>
                      <label>Xat</label>
                      <textarea
                        cols="30"
                        rows="10"
                        name="message"
                        ref={register({ required: true })}
                      ></textarea>
                      {errors.phone && errors.phone.type === "required" && (
                        <p>Message requird</p>
                      )}
                    </div>
                    <button type="submit">Отправить</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
          <div className="my-contact-bottom">
            <div>
              <i className="fas fa-phone-alt"></i>
              <h4>Qo'g'iroq uchun</h4>
              <p>(+99871) 241-01-86</p>
            </div>
            <div>
              <i className="fas fa-map-marker-alt"></i>
              <h4>Manzil</h4>
              <p>
                O`zbekiston, Toshkent, Shayxontohur tumani, Navoi ko'chasi, 2a
              </p>
            </div>
            <div>
              <i className="fas fa-envelope"></i>
              <h4>Email</h4>
              <p>uzedu@exat.uz</p>
            </div>
            <div>
              <i className="fas fa-phone-office"></i>
              <h4>Fax</h4>
              <p>(+99871) 241-01-86</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
