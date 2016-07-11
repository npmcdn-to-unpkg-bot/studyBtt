/**
 * Created by Truong on 06-Apr-16.
 */
var _ = require('underscore');

var test = {};
test['number1'] = {
    name: 'truongbt',
    age: 18
};
test['number2'] = {
    name: 'dung',
    age: 19
};
test['number3'] = {
    name: 'ly',
    age: 7
};

// _.each(test, function (value, key, list) {
//     console.log(value.name);
// });

var dataJson = [
    {
        "id": "3433575",
        "title": "Bồ Đào Nha toàn thua Pháp trong 10 lần đối đầu gần nhất",
        "url": "http://thethao.vnexpress.net/tin-tuc/tin-tuc/bo-dao-nha-toan-thua-phap-trong-10-lan-doi-dau-gan-nhat-3433575.html",
        "short_des": "Lịch sử đối đầu không ủng hộ đội bóng của Cristiano Ronaldo trong trận chung kết Euro 2016 với đội chủ nhà.",
        "content": ""
    },
    {
        "id": "3433579",
        "title": "Ronaldo - Griezmann: Đại chiến của hai số 7 ở chung kết Euro 2016",
        "url": "http://thethao.vnexpress.net/tin-tuc/binh-luan/ronaldo-griezmann-dai-chien-cua-hai-so-7-o-chung-ket-euro-2016-3433579.html",
        "short_des": "\"Sát thủ\" người Pháp có cơ hội phục hận siêu sao Bồ Đào Nha khi họ tái ngộ ngày 10/7 - hơn một tháng sau chung kết Champions League.",
        "content": ""
    },
    {
        "id": "3433369",
        "title": "Đức thua nhiều nhất ở bán kết giải đấu lớn trong một thập kỷ",
        "url": "http://thethao.vnexpress.net/tin-tuc/tin-tuc/duc-thua-nhieu-nhat-o-ban-ket-giai-dau-lon-trong-mot-thap-ky-3433369.html",
        "short_des": "10 năm qua, tuyển Đức có sáu lần liên tiếp vào bán kết các giải đấu lớn, nhưng chỉ vào chung kết hai lần.",
        "content": ""
    },
    {
        "id": "3433354",
        "title": "Klopp: 'Hợp đồng mới với Liverpool giống như hình phạt'",
        "url": "http://thethao.vnexpress.net/tin-tuc/giai-ngoai-hang-anh/klopp-hop-dong-moi-voi-liverpool-giong-nhu-hinh-phat-3433354.html",
        "short_des": "Nhà cầm quân người Đức bày tỏ sự ngạc nhiên khi đội bóng Anh đề nghị với ông một bản hợp đồng mới kéo dài đến sáu năm.",
        "content": ""
    }
];

_.each(dataJson, function (value, key, list) {
    console.log(value.url);
});