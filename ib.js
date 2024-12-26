function checkIban() {
    // الحصول على قيمة الـ IBAN من الحقل
    let ibanInput = document.getElementById('ibanInput').value.trim();

    // التحقق من أن IBAN يبدأ بـ "SA"
    if (ibanInput.startsWith('SA')) {
        ibanInput = ibanInput.substring(2); // حذف أول حرفين (SA)
    }

    // التحقق من الطول والصيغة
    if (ibanInput.length !== 22 || isNaN(ibanInput)) {
        displayInvalidResult();
        return;
    }

    // استخراج رمز SAMA
    const samaCode = ibanInput.substring(0, 2);
    const bank = banks.find(bank => bank.samaCode === samaCode); // البحث عن البنك

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ''; // تفريغ النتيجة السابقة

    if (bank) {
        // عرض معلومات البنك إذا تم العثور عليه
        resultDiv.innerHTML = `
            <table>
                <tr>
                    <th>الحالة</th>
                </tr>
                <tr>
                    <td>تم العثور على البنك: ${bank.name}</td>
                </tr>
            </table>
        `;
    } else {
        // عرض رسالة خطأ إذا لم يتم العثور على البنك
        displayInvalidResult();
    }
}

function displayInvalidResult() {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '<p style="color: red;">IBAN غير صالح. تأكد من المدخلات.</p>';
}

const banks = [   

    {'samaCode': '55', 'nameAr': 'البنك السعودي الفرنسي' },
    { 'samaCode': '80', 'nameAr': 'بنك الراجحي' },
    { 'samaCode': '10', 'nameAr': 'البنك الأهلي التجاري' },
    { 'samaCode': '45', 'nameAr': 'ساب' },
    { 'samaCode': '20', 'nameAr': 'بنك الرياض' },
    { 'samaCode': '40', 'nameAr': 'سامبا' },
    { 'samaCode': '05', 'nameAr': 'بنك الانماء' },
    { 'samaCode': '50', 'nameAr': 'البنك الأول' },
    { 'samaCode': '60', 'nameAr': 'بنك الجزيرة' },
    { 'samaCode': '65', 'nameAr': 'البنك السعودي للاستثمار' },
    { 'samaCode': '15', 'nameAr': 'بنك البلاد' },
    { 'samaCode': '30', 'nameAr': 'البنك العربي الوطني' },
    { 'samaCode': '90', 'nameAr': 'بنك الخليج' },
    { 'samaCode': '95', 'nameAr': 'بنك الإمارات' },
    { 'samaCode': '76', 'nameAr': 'بنك مسقط' },
    { 'samaCode': '71', 'nameAr': 'بنك البحرين الوطني' },
    { 'samaCode': '75', 'nameAr': 'بنك الكويت الوطني' },
    { 'samaCode': '85', 'nameAr': 'بي ان بي باريبوس' }
];

