function chuyenDoiThoiGian(thoiGian) {
  const date = new Date(thoiGian);

  // Lấy các thành phần thời gian
  const gio = String(date.getHours()).padStart(2, "0");
  const phut = String(date.getMinutes()).padStart(2, "0");
  const giay = String(date.getSeconds()).padStart(2, "0");
  const ngay = String(date.getDate()).padStart(2, "0");
  const thang = String(date.getMonth() + 1).padStart(2, "0"); // Lưu ý: Tháng bắt đầu từ 0
  const nam = date.getFullYear();

  // Tạo định dạng mới
  const thoiGianMoi = `${gio}:${phut}:${giay} ${ngay}/${thang}/${nam}`;

  return thoiGianMoi;
}

function chuyenDoiDinhDangThoiGian(thoiGian) {
  // Tách thời gian và ngày tháng từ chuỗi đầu vào
  const [gioPhutGiay, ngayThangNam] = thoiGian.split(" ");

  // Tách giờ, phút, giây và thời gian AM/PM từ thời gian
  const [gio, phut, giay] = gioPhutGiay.slice(0, -2).split(":").map(Number);
  const ampm = gioPhutGiay.slice(-2);

  // Chuyển đổi sang định dạng 24 giờ nếu là PM
  let gio24 = gio;
  if (ampm === "PM" && gio < 12) {
    gio24 += 12;
  } else if (ampm === "AM" && gio === 12) {
    gio24 = 0;
  }

  // Kết hợp lại thành chuỗi mới với định dạng mong muốn
  const thoiGianMoi = `${String(gio24).padStart(
    2,
    "0"
  )}:${phut}:${giay} ${ngayThangNam}`;

  return thoiGianMoi;
}

function tinhKhoangCach(thoiGian1, thoiGian2) {
  const [gio1, phut1, giay1, ngay1, thang1, nam1] = thoiGian1.split(/[\s:\/]+/);
  const date1 = new Date(nam1, thang1 - 1, ngay1, gio1, phut1, giay1);
  const [gio2, phut2, giay2, ngay2, thang2, nam2] = thoiGian2.split(/[\s:\/]+/);
  const date2 = new Date(nam2, thang2 - 1, ngay2, gio2, phut2, giay2);
  const khoangCach = Math.abs(date2 - date1);

  const phut = Math.floor(khoangCach / (1000 * 60));
  const gio = Math.floor(phut / 60);
  const ngay = Math.floor(gio / 24);

  if (ngay >= 1) {
    return `${ngay} ngày trước`;
  } else if (gio >= 1) {
    return `${gio} giờ trước`;
  } else {
    return `${phut} phút trước`;
  }
}

const comments = document.querySelector(".comments");
	fetch(`http://localhost:8081/api/comment/`)
		.then(res => res.json())
		.then((data) => {
      console.log(data)
			let html = "";
			data.map(item => {
				html += `<div class="anime__details__review">
                                <div class="anime__review__item">
                                    <div class="anime__review__item__pic">
                                        <img src=${item.image} alt="">
                                        <img src="img/avatar/khung.gif" alt="" class="frame_avatar">
                                    </div>
                                    <div class="anime__review__item__text">
                                        <div class="comment_header">
                                            <div class="comment_author">
                                                <span class="pbbm" data-tooltip="Đạo Tông"><img
                                                        src="https://hoathinh3d.tube/wp-content/uploads/2024/02/dao-tong.gif"
                                                        class="pbbm" alt="Đạo Tông" width="30px"></span>
                                                ${item.name}
                                                <span class="clan" data-tooltip="Đệ Tử">🏯Tiêu Dao⚔︎</span>
                                            </div>
                                            <div class="mycred-wrap">
                                                <img alt="" src="img/avatar/vo-thien-tan.webp">
                                            </div>
                                            <span class="displayTime" style="color: #fff"></span>
                                            <input value='${item.createAt}' type="hidden" class="hiddenTime">
                                        </div>
                                        <input class="contentComment" value='${item.content}' readonly>
                                        <div class="updateCm"><button type="submit">Lưu</button></div>
                                        ${item.idUser == 9 ? `<span class="settingComment"><i class="fa fa-cog"></i><ul class="list-group listSettingCm">  
                                        	<li class="list-group-item clickEditComment" id="${item.id}">Chỉnh sửa</li>
                                        	<li class="list-group-item">Xóa</li></ul></span>` : ''}
                                        ${item.edit_comment == "1" ? '<div class="isCheckEditCM" style="color: #fff; font-size: 10px"><i class="fa fa-pencil-square-o"></i> Đã chỉnh sửa</div>' : ''}                                        										
                                    </div>
                                </div>
                            </div>`
			})
			if (html == "") html = "<h5 class='noComment' style='color: #ffffff;font-family: 'Oswald', sans-serif;'>Chưa có bình luận nào</5>";
			comments.innerHTML = html;
			const hiddenTime = document.querySelectorAll('.hiddenTime');
			const displayTime = document.querySelectorAll('.displayTime');
			for (let i = 0; i < hiddenTime.length; i++) {
				displayTime[i].innerHTML = tinhKhoangCach(chuyenDoiDinhDangThoiGian(hiddenTime[i].value), chuyenDoiThoiGian(new Date()));
			}
			
			const clickEditComment = document.querySelectorAll(".clickEditComment");
			for (let i = 0; i < clickEditComment.length; i++) {
				clickEditComment[i].onclick = () => {					
					const content = clickEditComment[i].parentElement.parentElement.parentElement;
					const contentComment = content.querySelector(".contentComment");
					contentComment.removeAttribute("readonly");
					contentComment.focus();
					const updateCm = content.querySelector(".updateCm");
					updateCm.style.display= "block";
					updateCm.onclick = () => {
						editComment(contentComment.value, slugFilmS, clickEditComment[i].getAttribute("id"));
						updateCm.style.display= "none";
						contentComment.readOnly = true;
						if(content.querySelector(".isCheckEditCM") == null)
							content.insertAdjacentHTML('beforeend', html);
					}
				}
			}
		})
		.catch(error => {
			console.error('Có lỗi xảy ra' + error);
		});

