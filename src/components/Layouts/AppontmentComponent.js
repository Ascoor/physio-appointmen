import React from "react";
import "../../assets/css/AppontmentComponent.css";

const AppontmentComponent = () => {
  const handleSubmit = (e) => {
    e.preventDefault();

    // Access form input values directly
    const name = document.getElementById("name").value;
    const phone = document.getElementById("phone").value;
    const gender = document.getElementById("gender").value;
    const service = document.getElementById("service").value;
    const datetime = document.getElementById("datetime").value;
// Construct the WhatsApp message with line breaks
const message = `الاسم: ${name}
رقم الهاتف: ${phone},
الجنس: ${
  gender === "male" ? "ذكر" : "أنثى"
},
الخدمة: ${service},
تاريخ ووقت الموعد: ${datetime}`;

    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/201555589966/?text=${encodeURIComponent(
      message
    )}`;

    // Redirect the user to WhatsApp
    window.location.href = whatsappLink;
  };

  return (
    <div className="glass-card p-4" dir="rtl">
      <h1 className="text-center">احجز موعدك الآن</h1>

      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            الاسم
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            placeholder="أدخل اسمك"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            رقم الهاتف
          </label>
          <input
            type="tel"
            className="form-control"
            id="phone"
            pattern="0[0-9]{10}"
            placeholder="مثال، 01234567890"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="gender" className="form-label">
            الجنس
          </label>
          <select className="form-select" id="gender">
            <option value="">إختر</option>
            <option value="male">ذكر</option>
            <option value="female">أنثى</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="service" className="form-label">
            الخدمة
          </label>
          <select className="form-select" id="service">
            <option value="">إختر</option>
            <option value="consultation">إستشارة</option>
            <option value="treatment">جلسة علاج طبيعي</option>
          </select>
        </div>
        <div className="mb-3">
          <label htmlFor="datetime" className="form-label">
            تاريخ ووقت الموعد
          </label>
          <input
            type="datetime-local"
            className="form-control"
            id="datetime"
            min="2023-01-01T10:00"
            max="2030-12-31T21:00"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">
          إرسال
        </button>
      </form>
    </div>
  );
};

export default AppontmentComponent;
