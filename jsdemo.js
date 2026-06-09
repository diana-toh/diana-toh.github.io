document.addEventListener("DOMContentLoaded", () => {

    const menuBtn = document.getElementById("menuBtn");
    const mobileMenu = document.getElementById("mobileMenu");

    if(menuBtn && mobileMenu){

        menuBtn.addEventListener("click", () => {
            mobileMenu.classList.toggle("hidden");
        });

    }

});

console.log("JS 已成功載入");
        const cityData = {
            seoul: {
                title: "SEOUL 首爾站",
                date: "2026.07.03 (FRI) - 07.05 (SUN)",
                location: "首爾蠶室綜合運動場 特設舞台 (Jamsil Sports Complex)",
                price: "一日通票 KRW 154,000 起",
                bookingTime: "第一階段早鳥票：現正熱賣中 (限量售完為止)",
                desc: "WATERBOMB 的起源與旗艦主場！連續三天震撼首爾市中心，頂級 K-POP 偶像與嘻哈大咖齊聚，搭配史詩級高壓水槍水幕特效，帶來最極致的夏日狂歡。",
                lineup: [
                    { name: "JAY PARK", img: "https://yt3.googleusercontent.com/pZcZ11MP3azzqYuYCU0VOaOK0H4LfeS1ksQZmEkvLwQbgiqtRmdeCHbQjULxdHgH9xnhQpccJg=s900-c-k-c0x00ffffff-no-rj" },
                    { name: "CHUNG HA", img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5AYittJCfA1CdFmgV8E11h6AR1CqUv3daIw&s" },
                    { name: "ZICO", img: "https://phinf.wevpstatic.net/MjAyNTEyMjRfMTEg/MDAxNzY2NTcyOTA4MzQ5.eTDWcnl3_h78friyNjNpsZFpQHCtoE6_CFJLo-cRUv0g.H34yCWHoZ_1Gjprry-HckoSQp8JYmAaKHxNUSV4QFqQg.PNG/fb0ca5e3-e1f7-4b94-b70c-1cf4c723252b.png?type=w670" },
                    { name: "SUNMI", img: "https://thekpopcollective.com/images/sunmi.jpg" },
                    { name: "SIMON D", img: "https://assets.juksy.com/files/articles/128374/67acc4fc0bf25.jpg" },
                    { name: "AESPA", img: "https://i.pinimg.com/originals/95/eb/c8/95ebc84989d707b58197bc81886b4290.jpg" }
                ],
                ticketLink: "https://www.waterbombfestival.com/ticket"
            },
            busan: {
                title: "BUSAN 釜山站",
                date: "2026.07.25 (SAT)",
                location: "釜山亞運會主體育場 (Asiad Main Stadium)",
                price: "預售通票 KRW 143,000 起",
                bookingTime: "官方全面開賣：2026.04.15 14:00 (KST)",
                desc: "當海港城市的熱情遇上 WATERBOMB！在釜山盛夏的夜空下，與萬人一同在電音與水花中釋放壓力，體驗最熱辣的釜山限定音樂浪潮。",
                lineup: [
                    { name: "JESSI", img: "https://th.bing.com/th/id/OIP.ltiborUQrOw9-Bc-xHXCbQHaEs?w=313&h=199&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
                    { name: "LOCO", img: "https://th.bing.com/th/id/OIP.KMEN29tMjTvwjif63oVrLgHaHa?w=180&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
                    { name: "GRAY", img: "https://th.bing.com/th/id/OIP.0UV-kvewpaOkAq9RYKpaQwHaDt?w=307&h=175&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
                    { name: "HYOLYN", img: "https://th.bing.com/th/id/OIP.HlgvPuHzYsFTE1CYwLWDpwHaHa?w=186&h=186&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" }
                ],
                ticketLink: "https://www.waterbombfestival.com/ticket-busan"
            },
            sokcho: {
                title: "SOKCHO 束草站",
                date: "2026.08.08 (SAT)",
                location: "束草韓華度假村 露天特設會場 (Hanwha Resort Sokcho)",
                price: "預售通票 KRW 132,000 起",
                bookingTime: "官方全面開賣：2026.05.02 12:00 (KST)",
                desc: "背靠雪嶽山、面向東海的絕美度假勝地！束草站帶來獨特的渡假村派對氛圍，結合大自然風光與強烈節奏，是避暑度假的最完美解方。",
                lineup: [
                    { name: "KWON EUNBI", img: "https://tse2.mm.bing.net/th/id/OIP.WXOKpP_vOqgaQTznfNpyrAHaJQ?rs=1&pid=ImgDetMain&o=7&rm=3" },
                    { name: "BIG NAUGHTY", img: "https://tse1.mm.bing.net/th/id/OIP.zDYaev4k1UlgXJ-EOAQNZwHaI-?rs=1&pid=ImgDetMain&o=7&rm=3" },
                    { name: "PH-1", img: "https://tse2.mm.bing.net/th/id/OIP.gptgOrq1ZnPd9y1MX1PY8gHaFX?rs=1&pid=ImgDetMain&o=7&rm=3" }
                ],
                ticketLink: "https://www.waterbombfestival.com/ticket-sokcho"
            },
            kaohsiung: {
                title: "KAOHSIUNG 高雄站",
                date: "2026.09.12 (SAT) - 09.13 (SUN)",
                location: "高雄國家體育場 戶外廣場 (Kaohsiung National Stadium)",
                price: "早鳥單日票 TWD 3,200 / 雙日票 TWD 5,800",
                bookingTime: "台灣獨家首波開賣：2026.06.01 12:00 (GMT+8) 於 KLOOK 獨家販售",
                desc: "WATERBOMB 跨海登陸南台灣！高雄站將全面複製韓國原廠極致水效與舞台規模。台韓頂級藝人聯手混戰、劃分水槍陣營對抗，引爆高港九月最狂熱浪！",
                lineup: [
                    { name: "CL", img: "https://th.bing.com/th/id/OIP.TpoW6jVu8WFEg5oQttdHSQHaHa?w=174&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
                    { name: "HWASA", img: "https://th.bing.com/th/id/OIP.fo8HnqWLiKRj1w4efMsodAHaJQ?w=186&h=233&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" },
                    { name: "ØZI", img: "https://vos.line-scdn.net/music-img/cms/Magazine/cover/237_01251133_cover2.jpg" },
                    { name: "MJF 頑童", img: "https://benlinmarketing.com/wp-content/uploads/2025/06/sean-y5679ls2.jpg?w=1024" }
                ],
                ticketLink: "https://www.klook.com"
            }
        };

        function openModal(cityKey) {
            const data = cityData[cityKey];
            if (!data) return;

            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalDate').innerText = data.date;
            document.getElementById('modalLocation').innerText = data.location;
            document.getElementById('modalPrice').innerText = data.price;
            document.getElementById('modalBookingTime').innerText = data.bookingTime;
            document.getElementById('modalDesc').innerText = data.desc;
            document.getElementById('modalTicketLink').href = data.ticketLink;

            // 【修改】動態生成 1:1 照片網格 + 透明米白色文字遮罩
            const lineupContainer = document.getElementById('modalLineup');
            lineupContainer.innerHTML = '';
            
            data.lineup.forEach(artist => {
                const div = document.createElement('div');
                div.className = "relative aspect-square bg-gray-950 rounded-xl overflow-hidden group/artist border border-gray-800 shadow-md";
                
                div.innerHTML = `
                    <img src="${artist.img}" alt="${artist.name}" class="w-full h-full object-cover group-hover/artist:scale-110 transition duration-500">
                    
                    <div class="absolute bottom-0 left-0 w-full bg-black/60 backdrop-blur-[2px] py-2 px-1 text-center border-t border-white/5">
                        <p class="text-[11px] md:text-xs font-black text-white/80 tracking-wide uppercase">
                            ${artist.name}
                        </p>
                    </div>
                `;
                lineupContainer.appendChild(div);
            });

            // 顯示 Modal
            const modal = document.getElementById('cityModal');
            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden'; 
        }

        function closeModal() {
            const modal = document.getElementById('cityModal');
            modal.classList.add('hidden');
            document.body.style.overflow = ''; 
        }

        document.getElementById('cityModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeModal();
            }
        });
        const searchInput = document.getElementById('searchCity');

searchInput.addEventListener('keyup', function () {

    const keyword = this.value.toLowerCase();

    document.querySelectorAll('#cities .group').forEach(card => {

        const cityName =
            card.querySelector('h3').innerText.toLowerCase();

        if (cityName.includes(keyword)) {
            card.style.display = '';
        } else {
            card.style.display = 'none';
        }

    });
});

function scrollToSection(id){

    const section = document.getElementById(id);

    if(!section) return;

    const y =
        section.offsetTop -
        (window.innerHeight / 2) +
        (section.offsetHeight / 2);

    window.scrollTo({
        top: y,
        behavior: "smooth"
    });

}

document.querySelectorAll("#mobileMenu a").forEach(link => {

    link.addEventListener("click", () => {

        mobileMenu.classList.add("hidden");

    });

});

menuBtn.addEventListener("click", () => {

    mobileMenu.classList.toggle("translate-x-full");

});