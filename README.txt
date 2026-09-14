<!DOCTYPE html>
<html lang="ar" dir="rtl">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>RAFIQ STORE</title>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cairo:wght@400;500;600;700;800&display=swap');

:root{
--primary:#111827;
--secondary:#2563eb;
--bg:#f7f8fa;
--card:#fff;
--text:#111827;
--muted:#6b7280;
--border:#e5e7eb;
}

*{box-sizing:border-box;margin:0;padding:0;font-family:Cairo,sans-serif}

body{
background:var(--bg);
color:var(--text);
transition:.25s;
}

button,input,textarea,select{font-family:inherit}
button{cursor:pointer;border:0}

header{
position:sticky;
top:0;
z-index:100;
background:rgba(255,255,255,.92);
backdrop-filter:blur(15px);
border-bottom:1px solid var(--border);
}

.nav{
max-width:1200px;
height:75px;
margin:auto;
padding:0 20px;
display:flex;
align-items:center;
justify-content:space-between;
}

.brand{
display:flex;
align-items:center;
gap:10px;
font-size:21px;
font-weight:800;
}

.logo{
width:45px;
height:45px;
border-radius:13px;
object-fit:cover;
background:#eee;
}

.nav-actions{display:flex;gap:8px}

.icon-btn{
width:43px;
height:43px;
border-radius:13px;
background:#f1f3f5;
font-size:18px;
}

.hero{
max-width:1200px;
margin:30px auto;
padding:60px 30px;
min-height:390px;
border-radius:28px;
display:flex;
align-items:center;
justify-content:space-between;
gap:30px;
background:linear-gradient(135deg,var(--primary),#374151);
color:white;
overflow:hidden;
}

.hero-content{max-width:650px}

.hero h1{
font-size:clamp(35px,6vw,65px);
line-height:1.15;
margin-bottom:18px;
}

.hero p{
color:#d1d5db;
font-size:17px;
line-height:1.9;
margin-bottom:25px;
}

.hero img{
width:330px;
max-width:40%;
height:300px;
border-radius:25px;
object-fit:cover;
}

.btn{
padding:13px 21px;
border-radius:13px;
font-weight:700;
background:var(--secondary);
color:white;
}

.light{
background:white;
color:#111;
}

.section{
max-width:1200px;
margin:65px auto;
padding:0 20px;
}

.section-title{margin-bottom:25px}

.section-title h2{font-size:30px}

.section-title p{
color:var(--muted);
margin-top:5px;
}

.products{
display:grid;
grid-template-columns:repeat(4,1fr);
gap:20px;
}

.product{
background:var(--card);
border:1px solid var(--border);
border-radius:18px;
overflow:hidden;
transition:.25s;
}

.product:hover{transform:translateY(-5px)}

.product-img{
position:relative;
aspect-ratio:1/1;
background:#eee;
}

.product-img img{
width:100%;
height:100%;
object-fit:cover;
}

.badge{
position:absolute;
top:12px;
right:12px;
background:var(--secondary);
color:#fff;
padding:5px 10px;
border-radius:20px;
font-size:12px;
font-weight:bold;
}

.product-body{padding:16px}

.product-body h3{
font-size:17px;
margin-bottom:5px;
}

.product-body p{
color:var(--muted);
font-size:13px;
min-height:42px;
}

.price{
margin-top:12px;
display:flex;
gap:9px;
align-items:center;
}

.current{
font-size:20px;
font-weight:800;
}

.old{
color:#9ca3af;
text-decoration:line-through;
font-size:13px;
}

.buy{
width:100%;
margin-top:13px;
}

.features{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:18px;
}

.feature{
background:var(--card);
border:1px solid var(--border);
padding:25px;
border-radius:20px;
}

.feature-icon{
font-size:30px;
margin-bottom:10px;
}

.offer{
background:linear-gradient(135deg,var(--secondary),#7c3aed);
color:white;
padding:35px;
border-radius:25px;
text-align:center;
}

.offer h2{
font-size:32px;
margin-bottom:10px;
}

.reviews{
display:grid;
grid-template-columns:repeat(3,1fr);
gap:18px;
}

.review{
background:var(--card);
border:1px solid var(--border);
padding:22px;
border-radius:20px;
}

.stars{
color:#f59e0b;
margin-bottom:10px;
}

.review p{
color:var(--muted);
line-height:1.8;
}

.review strong{
display:block;
margin-top:12px;
}

.faq{
display:flex;
flex-direction:column;
gap:12px;
}

details{
background:var(--card);
border:1px solid var(--border);
border-radius:15px;
padding:18px;
}

summary{
cursor:pointer;
font-weight:700;
}

details p{
color:var(--muted);
margin-top:10px;
line-height:1.8;
}

footer{
background:var(--primary);
color:white;
padding:45px 20px;
margin-top:70px;
}

.footer-inner{
max-width:1200px;
margin:auto;
display:flex;
justify-content:space-between;
gap:30px;
}

.footer-inner p{
color:#cbd5e1;
margin-top:7px;
}

#admin{
display:none;
min-height:100vh;
background:#f3f4f6;
}

.admin-header{
background:#111827;
color:white;
padding:18px 25px;
display:flex;
justify-content:space-between;
align-items:center;
}

.admin-layout{
max-width:1400px;
margin:auto;
padding:25px;
display:grid;
grid-template-columns:300px 1fr;
gap:20px;
}

.admin-sidebar,
.admin-main{
background:white;
border-radius:20px;
border:1px solid #e5e7eb;
}

.admin-sidebar{
padding:18px;
height:max-content;
position:sticky;
top:20px;
}

.admin-sidebar button{
width:100%;
text-align:right;
padding:13px;
background:#f3f4f6;
border-radius:12px;
margin-bottom:8px;
}

.admin-main{padding:25px}

.admin-section{display:none}

.admin-section.active{display:block}

.form-grid{
display:grid;
grid-template-columns:repeat(2,1fr);
gap:15px;
}

.field{margin-bottom:15px}

.field.full{grid-column:1/-1}

.field label{
display:block;
font-weight:700;
margin-bottom:6px;
}

.field input,
.field textarea,
.field select{
width:100%;
padding:12px;
border:1px solid #ddd;
border-radius:12px;
outline:none;
}

.field textarea{
min-height:100px;
resize:vertical;
}

.admin-btn{
background:#111827;
color:white;
padding:11px 16px;
border-radius:11px;
}

.blue{background:#2563eb}
.red{background:#ef4444}
.green{background:#16a34a}

.admin-product{
display:flex;
align-items:center;
gap:15px;
border:1px solid #e5e7eb;
padding:12px;
border-radius:15px;
margin-bottom:10px;
}

.admin-product img{
width:70px;
height:70px;
object-fit:cover;
border-radius:12px;
}

.admin-product-info{flex:1}

.admin-product-actions{
display:flex;
gap:6px;
flex-wrap:wrap;
}

.sortable{
display:flex;
flex-direction:column;
gap:10px;
}

.sort-item{
background:#f9fafb;
border:1px solid #ddd;
padding:15px;
border-radius:14px;
display:flex;
align-items:center;
gap:12px;
cursor:grab;
}

.sort-item span{flex:1}

.modal{
position:fixed;
inset:0;
background:rgba(0,0,0,.65);
display:none;
align-items:center;
justify-content:center;
z-index:1000;
padding:20px;
}

.modal.show{display:flex}

.modal-box{
background:white;
width:min(650px,100%);
max-height:90vh;
overflow:auto;
border-radius:20px;
padding:25px;
}

.modal-header{
display:flex;
justify-content:space-between;
margin-bottom:20px;
}

.close{
background:#f3f4f6;
width:35px;
height:35px;
border-radius:10px;
}

body.dark{
--bg:#0b1120;
--card:#111827;
--text:#f9fafb;
--muted:#9ca3af;
--border:#1f2937;
}

body.dark header{
background:rgba(17,24,39,.9);
}

body.dark .icon-btn{
background:#1f2937;
}

body.dark #admin{
background:#0b1120;
}

body.dark .admin-sidebar,
body.dark .admin-main{
background:#111827;
border-color:#1f2937;
}

body.dark .sort-item{
background:#1f2937;
border-color:#374151;
}

body.dark .modal-box{
background:#111827;
}

@media(max-width:950px){

.products{
grid-template-columns:repeat(2,1fr);
}

.features,
.reviews{
grid-template-columns:1fr;
}

.admin-layout{
grid-template-columns:1fr;
}

.admin-sidebar{
position:static;
}

.hero img{
display:none;
}

}

@media(max-width:600px){

.products{
grid-template-columns:1fr;
}

.hero{
margin:15px;
padding:35px 22px;
}

.section{
margin:45px auto;
}

.form-grid{
grid-template-columns:1fr;
}

.footer-inner{
flex-direction:column;
}

.admin-layout{
padding:12px;
}

}
</style>
</head>

<body>

<div id="store">

<header>
<div class="nav">

<div class="brand">
<img id="logo" class="logo">
<span id="storeName">RAFIQ STORE</span>
</div>

<div class="nav-actions">
<button class="icon-btn" onclick="toggleDark()">🌙</button>
<button class="icon-btn" onclick="openAdmin()">⚙️</button>
</div>

</div>
</header>

<main id="storeContent"></main>

<footer>
<div class="footer-inner">

<div>
<h2 id="footerName">RAFIQ STORE</h2>
<p id="footerDescription">متجرك الإلكتروني بطريقة احترافية.</p>
</div>

<div>
<p id="footerLocation"></p>
<p id="footerPhone"></p>
</div>

</div>
</footer>

</div>


<div id="admin">

<div class="admin-header">
<strong>⚙️ لوحة تحكم المتجر</strong>
<button class="admin-btn" onclick="closeAdmin()">عرض المتجر</button>
</div>

<div class="admin-layout">

<aside class="admin-sidebar">

<button onclick="showAdmin('settings')">🏪 بيانات المتجر</button>
<button onclick="showAdmin('products')">🛍️ المنتجات</button>
<button onclick="showAdmin('sections')">🧩 الأقسام</button>
<button onclick="showAdmin('appearance')">🎨 المظهر</button>
<button onclick="showAdmin('shipping')">📦 الشحن</button>
<button onclick="showAdmin('reviews')">⭐ التقييمات</button>
<button onclick="showAdmin('faq')">❓ الأسئلة</button>
<button onclick="showAdmin('backup')">💾 النسخ الاحتياطي</button>

</aside>

<main class="admin-main">

<section id="admin-settings" class="admin-section active">

<h2>🏪 بيانات المتجر</h2><br>

<div class="form-grid">

<div class="field">
<label>اسم المتجر</label>
<input id="setName">
</div>

<div class="field">
<label>رابط اللوجو</label>
<input id="setLogo">
</div>

<div class="field full">
<label>عنوان المتجر</label>
<input id="setHeroTitle">
</div>

<div class="field full">
<label>وصف المتجر</label>
<textarea id="setHeroDesc"></textarea>
</div>

<div class="field">
<label>رقم واتساب</label>
<input id="setWhatsapp">
</div>

<div class="field">
<label>رقم الهاتف</label>
<input id="setPhone">
</div>

<div class="field">
<label>الموقع</label>
<input id="setLocation">
</div>

<div class="field">
<label>رابط صورة الرئيسية</label>
<input id="setHeroImage">
</div>

</div>

<button class="admin-btn blue" onclick="saveSettings()">حفظ التعديلات</button>

</section>


<section id="admin-products" class="admin-section">

<div style="display:flex;justify-content:space-between;align-items:center">
<h2>🛍️ المنتجات</h2>
<button class="admin-btn blue" onclick="openProductModal()">+ إضافة منتج</button>
</div>

<br>

<div id="adminProducts"></div>

</section>


<section id="admin-sections" class="admin-section">

<h2>🧩 إدارة الأقسام</h2>

<p style="color:#777;margin:8px 0 20px">
اسحب الأقسام لترتيبها، أو أخفِ أي قسم بدون حذفه.
</p>

<div id="sortableSections" class="sortable"></div>

<br>

<button class="admin-btn blue" onclick="addSection()">+ إضافة قسم</button>

</section>


<section id="admin-appearance" class="admin-section">

<h2>🎨 المظهر</h2><br>

<div class="form-grid">

<div class="field">
<label>اللون الرئيسي</label>
<input type="color" id="primaryColor">
</div>

<div class="field">
<label>لون الأزرار</label>
<input type="color" id="secondaryColor">
</div>

<div class="field">
<label>الوضع الليلي</label>
<select id="darkMode">
<option value="auto">حسب الجهاز</option>
<option value="on">تشغيل</option>
<option value="off">إيقاف</option>
</select>
</div>

</div>

<button class="admin-btn blue" onclick="saveAppearance()">حفظ المظهر</button>

</section>


<section id="admin-shipping" class="admin-section">

<h2>📦 معلومات الشحن</h2><br>

<div class="form-grid">

<div class="field">
<label>سعر الشحن</label>
<input type="number" id="shippingPrice">
</div>

<div class="field">
<label>مدة التوصيل</label>
<input id="shippingTime">
</div>

<div class="field full">
<label>معلومات الشحن</label>
<textarea id="shippingInfo"></textarea>
</div>

</div>

<button class="admin-btn blue" onclick="saveShipping()">حفظ</button>

</section>


<section id="admin-reviews" class="admin-section">

<h2>⭐ تقييمات العملاء</h2><br>

<div id="reviewsAdmin"></div>

<br>

<button class="admin-btn blue" onclick="addReview()">+ إضافة تقييم</button>

</section>


<section id="admin-faq" class="admin-section">

<h2>❓ الأسئلة والأجوبة</h2><br>

<div id="faqAdmin"></div>

<br>

<button class="admin-btn blue" onclick="addFAQ()">+ إضافة سؤال</button>

</section>


<section id="admin-backup" class="admin-section">

<h2>💾 النسخ الاحتياطي</h2>

<p style="margin:15px 0;color:#777">
احفظ بيانات المتجر أو استرجع نسخة سابقة.
</p>

<button class="admin-btn green" onclick="exportData()">
تصدير البيانات
</button>

<br><br>

<input type="file" id="importFile" accept=".json">

<br><br>

<button class="admin-btn blue" onclick="importData()">
استيراد البيانات
</button>

</section>

</main>
</div>
</div>


<div id="productModal" class="modal">

<div class="modal-box">

<div class="modal-header">
<h2>إضافة / تعديل منتج</h2>
<button class="close" onclick="closeProductModal()">✕</button>
</div>

<input type="hidden" id="productId">

<div class="field">
<label>اسم المنتج</label>
<input id="productName">
</div>

<div class="field">
<label>الوصف</label>
<textarea id="productDesc"></textarea>
</div>

<div class="form-grid">

<div class="field">
<label>السعر</label>
<input type="number" id="productPrice">
</div>

<div class="field">
<label>السعر القديم</label>
<input type="number" id="productOldPrice">
</div>

<div class="field">
<label>Badge</label>
<input id="productBadge" placeholder="الأكثر مبيعاً">
</div>

<div class="field">
<label>رابط الفيديو</label>
<input id="productVideo" placeholder="رابط YouTube أو MP
