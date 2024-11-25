<template>
  <div class="h-screen w-full py-16">
    <div class="container mx-auto">
      <div class="flex items-start justify-start">
        <UIDropdown
          trigger-class="flex  items-center h-full"
          dropdown-class="w-[171px] overflow-hidden rounded-lg bg-[#F7F7F7]  left-0"
          chevron-icon-class="hidden"
          bottom="-8px"
          class="h-full"
          auto-close
        >
          <template #trigger>
            <UIIcon name="share" class="text-xl text-[#030303]" />
            <p class="text-sm font-medium text-[#030303]">Ulashish</p>
          </template>

          <div>
            <ul>
              <li
                class="flex cursor-pointer items-center gap-[6px] whitespace-nowrap p-2 pr-[14px] text-sm text-[#030303] transition-colors duration-300 hover:bg-[#E5E5E5]"
                @click="copyLink"
              >
                <UIIcon name="copy" class="text-[#696969]" />
                Havoladan nusxa olish
              </li>
              <li
                class="flex cursor-pointer items-center gap-[6px] whitespace-nowrap p-2 pr-[14px] text-sm text-[#030303] transition-colors duration-300 hover:bg-[#E5E5E5]"
                @click="shareToTelegram"
              >
                <UIIcon name="telegram" class="text-[#696969]" />
                Telegram
              </li>
            </ul>
          </div>
        </UIDropdown>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
import { useMeta } from "~/composables/useMeta";

const shareToTelegram = () => {
  const telegramShareUrl = `https://t.me/share/url?url=${encodeURIComponent(
    window.location.href,
  )}&text=${encodeURIComponent(`${data.value.title}\n\n${data.value.image}`)}`;

  window.open(telegramShareUrl, "_blank");
};

const copyLink = () => {
  const currentUrl = window.location.href;
  navigator.clipboard
    .writeText(currentUrl)
    .then(() => {
      console.log("Sahifa URL nusxalandi:", currentUrl);
      alert("Sahifa URL nusxalandi!");
    })
    .catch((err) => {
      console.error("Nusxa olishda xato yuz berdi:", err);
      alert("Havolani nusxalashda xato yuz berdi");
    });
};

const data = ref({
  id: 1,
  title: "Kitobxonlar uchun yana bir ajoyib yangilik",
  slug: "kitobxonlar-uchun-yana-bir-ajoyib-yangilik",
  image: "https://api.mutolaa.com/media/news/2024/11/image.png",
  category: {
    id: 1,
    name: "Yangiliklar",
  },
  read_time: 2,
  content:
    '<div><img src="https://api.mutolaa.com/media/uploads/2024/11/image.png" alt="" width="1419" height="789"></div>\r\n<div>&nbsp;</div>\r\n<div>Toshkentda Mutolaa loyihasi taqdimoti bo&lsquo;lib o&lsquo;tdi &mdash; bepul mobil ilova o&lsquo;zbek tilidagi 1000 dan ortiq kitoblarni o&lsquo;z ichiga olgan, ularning yarmidan ko&lsquo;pi audio versiyasiga ega. Matnlar professional dublyaj aktyorlari tomonidan o&lsquo;qilgan.<br><br>Toshkentda o&lsquo;zbek tilidagi 1000 dan ortiq elektron va&nbsp;audiokitoblarni jamlagan Mutolaa bepul mobil ilovasi taqdimoti bo&lsquo;lib o&lsquo;tdi, deb xabar bermoqda &ldquo;Gazeta.uz&rdquo; muxbiri.<br>Loyiha uchun o&lsquo;zbek va&nbsp;xorijiy adabiyotlar O&lsquo;zbekistonning professional dublyaj aktyorlari tomonidan ijro etildi. Bundan tashqari, o&lsquo;qish monoton bo&lsquo;lmasligi uchun matnga musiqiy hamrohlik qo&lsquo;shilgan.<br>Yoshlar ishlari agentligi direktori Alisher Sa&rsquo;dullayev loyiha <a href="https://google.com">tarixi haqida so&lsquo;zlab</a> berdi. Agentlik buni Xalq banki bilan hamkorlikda amalga oshirdi.</div>\r\n<div>&nbsp;</div>\r\n<div><img src="https://api.mutolaa.com/media/uploads/2024/11/image_xZyU0qL.png" alt="" width="1419" height="790"></div>\r\n<blockquote><span style="background-color: rgb(255, 225, 201);">Bu nom yosh jamoaga jadid Mahmudho&lsquo;ja Behbudiyning maqolalarini o&lsquo;qib chiqqandan keyin keldi. &ldquo;Behbudiy ilm-ma\'rifat zarurligi haqida ko&lsquo;p yozgan, uyida kutubxona tashkil etgan va &ldquo;mutolaa&rdquo; so&lsquo;zini ko&lsquo;p ishlatgan. Uning maqolalaridan ilhomlanib, loyihaga shunday nom berishga qaror qildik<br><br><strong>Alisher Sadullayev</strong></span></blockquote>\r\n<p>Loyiha O&lsquo;zbekiston prezidentining &ldquo;Yoshlar uchun ming kitob&rdquo; loyihasini amalga oshirish to&lsquo;g&lsquo;risidagi qarori ijrosi doirasida amalga oshirilmoqda.<br><br>Bugungi kunda Mutolaa ilovasida 1000 dan ortiq elektron kitoblar mavjud. Bundan tashqari, ularning 500 dan ortiq audio versiyalari yozib olingan. Ilova to&lsquo;plamiga badiiy adabiyot, bolalar va ilmiy-ommabop adabiyotlar kiritilgan. Loyiha jamoasi ma&rsquo;lumotlariga ko&lsquo;ra, ilovadan foydalanuvchilar soni allaqachon 300 mingga yaqin.</p>\r\n<p style="text-align: left;"><img src="https://api.mutolaa.com/media/uploads/2024/11/image_Zz78xg6.png" alt="" width="1419" height="790"></p>\r\n<p style="text-align: left;">Uzoq muddatda Mutolaa yozuvchilar o&lsquo;z asarlarini nashr etishlari va nashriyotlarga murojaat qilishlari mumkin bo&lsquo;lgan platformaga aylanish niyatida.<br><br>Bundan tashqari, loyiha mualliflari auditoriyani jalb qilish, ya&rsquo;ni adabiy asarlarga sharhlar yaratish va o&lsquo;qish tahlillarini o&lsquo;tkazish uchun o&lsquo;qish jarayonini &ldquo;o&lsquo;yinlashtirmoqchi&rdquo;. Va nihoyat, loyiha yozuvchilar o&lsquo;z asarlarini tijoratlashtirishlari mumkin bo&lsquo;lgan platformaga aylanishi kerak.<br><br>Taqdimot doirasida yosh o&lsquo;zbek yozuvchisi Javlon Jovliyevning &ldquo;Qo&lsquo;rqma&rdquo; romani videotahlilining premerasi bo&lsquo;lib o&lsquo;tdi.</p>',
  published_at: "2024-11-23T14:34:38+05:00",
});

useMeta({
  title: data.value?.title,
  image: data.value?.image,
});
</script>
