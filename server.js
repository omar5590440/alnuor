const express = require('express');
const multer = require('multer');
const fs = require('fs');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

// إعداد التخزين للصور
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        const dir = path.join(__dirname, 'uploads');
        if (!fs.existsSync(dir)) fs.mkdirSync(dir);
        cb(null, dir);
    },
    filename: function (req, file, cb) {
        const unique = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, unique + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// السماح بالوصول من أي دومين (للتجربة المحلية)
app.use(cors());
app.use(express.json());
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// تحميل المنتجات من ملف JSON
const dbFile = path.join(__dirname, 'products.json');
function loadProducts() {
    if (!fs.existsSync(dbFile)) return [];
    return JSON.parse(fs.readFileSync(dbFile, 'utf8'));
}
function saveProducts(products) {
    fs.writeFileSync(dbFile, JSON.stringify(products, null, 2), 'utf8');
}

// جلب جميع المنتجات
app.get('/api/products', (req, res) => {
    res.json(loadProducts());
});

// إضافة منتج جديد
app.post('/api/products', upload.single('image'), (req, res) => {
    const { title, desc } = req.body;
    if (!title || !desc || !req.file) {
        return res.status(400).json({ error: 'جميع الحقول مطلوبة' });
    }
    const products = loadProducts();
    const newProduct = {
        id: Date.now(),
        title,
        desc,
        image: '/uploads/' + req.file.filename
    };
    products.unshift(newProduct);
    saveProducts(products);
    res.json(newProduct);
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});

// الكود الحالي مفعل وجاهز لقاعدة البيانات ورفع الصور
// فقط تأكد من تشغيل السيرفر ووجود المجلدات المطلوبة
