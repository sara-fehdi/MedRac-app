// عند الضغط في أي مكان داخل الصفحة
document.addEventListener("click", function () {
  // نحصل على اسم الملف الحالي
  const currentPage = window.location.pathname.split("/").pop();

  // نحدد الصفحة التالية حسب الصفحة الحالية
  let nextPage = "";

  switch (currentPage) {
    case "index.html":
    case "": // في حال كانت الصفحة الرئيسية فقط
      nextPage = "login.html";
      break;

    case "login.html":
      nextPage = "signup.html";
      break;

    case "signup.html":
      nextPage = "welcome.html";
      break;

    case "welcome.html":
      nextPage = "index.html"; // نعيد المستخدم للصفحة الأولى مثلاً
      break;

    default:
      nextPage = "index.html"; // صفحة افتراضية
  }

  // الانتقال إلى الصفحة التالية
  window.location.href = nextPage;
});

