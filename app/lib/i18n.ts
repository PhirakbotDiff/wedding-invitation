export type Lang = "en" | "km";

const translations = {
  en: {
    lang_toggle: "ភាសាខ្មែរ",

    // OpeningScreen
    wedding_invitation: "The Wedding Invitation",
    welcome: "Welcome",
    guest_welcome_msg: "You are warmly welcomed.",
    save_the_date: "Save the Date",
    open_invitation: "Open Invitation",

    // Top bar
    our_wedding_day: "Our Wedding Day",

    // Hero
    invitation_label: "Wedding Invitation",
    groom_name: "Phirakbot",
    bride_name: "Somaly",

    // Wedding Details
    wedding_details_overline: "ពិធីរៀបអាពាហ៍ពិពាហ៍",
    wedding_details_title: "Wedding Details",
    wedding_details_subtitle: "We are honored to celebrate this joyful day with you.",
    date_label: "Date",
    date_value: "Saturday, 16 January 2027",
    time_label: "Time",
    time_value: "Reception starts at 5:00 PM",
    venue_label: "Venue",
    venue_value: "Phnom Penh Grand Ballroom, Phnom Penh",
    dress_code: "Dress code: Elegant Traditional / Formal Attire",

    // RSVP
    rsvp_label: "Attendance Confirmation",
    rsvp_accept: "✅ Accept with pleasure",
    rsvp_decline: "🙏 Regretfully decline",
    rsvp_confirm: "Confirm Attendance",
    rsvp_seats: "Allowed seats for your invitation:",

    // Love Story
    love_story_title: "Our Love Story",
    love_story_subtitle:
      "A beautiful journey began with friendship, grew with trust, and today blossoms into a lifetime promise.",
    love_story_items: [
      { year: "2018", title: "First Meeting", desc: "We met as friends and discovered a calm joy in every conversation." },
      { year: "2020", title: "Growing Together", desc: "From shared dreams to difficult days, we learned what commitment truly means." },
      { year: "2022", title: "Promise of Forever", desc: "We promised to walk through every season hand in hand with faith and kindness." },
      { year: "2027", title: "Wedding Day", desc: "With grateful hearts, we celebrate the beginning of our forever as husband and wife." },
    ],

    // Ceremony Highlights
    ceremony_title: "Ceremony Highlights",
    ceremony_blessing_label: "Blessing Ceremony",
    ceremony_blessing_desc: "Traditional blessing and family honoring ceremony in the morning.",
    ceremony_reception_label: "Reception & Toast",
    ceremony_reception_desc: "An evening reception with dinner, music, speeches, and joyful celebration.",

    // Gallery
    gallery_title: "Photo Gallery",

    // Timeline
    timeline_overline: "Wedding Timeline",
    timeline_title: "Wedding Schedule",
    timeline_subtitle: "Phirakbot × Somaly",
    timeline_items: [
      { time: "06:00 AM", title: "Blessing Ceremony", description: "The ceremony begins with prayers and blessings for happiness and prosperity." },
      { time: "08:00 AM", title: "Procession Ceremony", description: "Traditional procession with joy and celebration." },
      { time: "10:00 AM", title: "Hair Cutting Ceremony", description: "A traditional ceremony symbolizing good fortune for the newlyweds." },
      { time: "12:00 PM", title: "Lunch Feast", description: "Guests of honor are invited to share a midday meal together." },
      { time: "06:00 PM", title: "Evening Reception", description: "Celebrate the wedding with music, dancing, and joyful festivities." },
    ],

    // Location
    location_overline: "Location",
    location_title: "Venue & Map",
    location_name: "Phnom Penh Grand Ballroom",
    location_city: "Phnom Penh, Cambodia",
    location_map_btn: "Open Google Maps Location",

    // Gift
    gift_overline: "Wedding Gift from Attendees",
    gift_title: "Blessings & Gifts",
    gift_qr: "Scan QR for wedding gift",
    gift_contact: "Contact:",

    // Thank You
    thank_you_overline: "Wedding Thank You",
    thank_you_title: "Heartfelt Gratitude",
    thank_you_text:
      "Thank you for your love, support, and for taking the time to join our special day. Your presence is the most precious gift for our new family.",

    // Apology
    apology_overline: "Wedding Apology",
    apology_title: "Letter of Apology",
    apology_text:
      "We sincerely apologize if there is anything that did not meet your expectations during our celebration. Your understanding and gracious presence mean everything to us.",

    // Classic Khmer Card
    card_title: "Auspicious Wedding Ceremony",
    card_groom_family: "Groom's Family",
    card_bride_family: "Bride's Family",
    card_father: "Father:",
    card_mother: "Mother:",
    card_invite_text:
      "Your Excellencies, Oknha, distinguished Ladies and Gentlemen are cordially invited as honored guests to bestow blessings upon the wedding ceremony of our beloved children.",
    card_groom_label: "Groom",
    card_bride_label: "Bride",
    card_date_text:
      "The ceremony will be held on Saturday, the 16th of January 2027, corresponding to the 7th waxing moon of Meak month, Saptasak year, B.E. 2569, at 5:00 PM at the bride's residence. Your presence is our greatest honor.",

    // Countdown
    countdown_overline: "Wedding Countdown",
    countdown_title: "Counting Every Precious Moment",
    calendar_label: "Calendar • January 2027",
    days: "Days",
    hours: "Hours",
    minutes: "Minutes",
    seconds: "Seconds",

    // Menu
    menu_hero: "Home",
    menu_details: "Details",
    menu_love: "Love Story",
    menu_gallery: "Gallery",
    menu_location: "Location",
    menu_gift: "Gift",
  },

  km: {
    lang_toggle: "English",

    // OpeningScreen
    wedding_invitation: "លិខិតអញ្ជើញ",
    welcome: "សូមស្វាគមន៍",
    guest_welcome_msg: "អ្នកត្រូវបានស្វាគមន៍យ៉ាងខ្លាំង។",
    save_the_date: "ចងចាំកាលបរិច្ឆេទ",
    open_invitation: "បើកលិខិតអញ្ជើញ",

    // Top bar
    our_wedding_day: "ថ្ងៃមង្គលការយើង",

    // Hero
    invitation_label: "លិខិតអញ្ជើញ",
    groom_name: "ឈឿន គង្គាភិរុណភិរក្សបុត្រ",
    bride_name: "ប៉ែន សុម៉ាលី",

    // Wedding Details
    wedding_details_overline: "ពិធីរៀបអាពាហ៍ពិពាហ៍",
    wedding_details_title: "ព័ត៌មានពិធីមង្គលការ",
    wedding_details_subtitle: "យើងមានកិត្តិយសសូមអញ្ជើញអ្នកចូលរួមមង្គលការ។",
    date_label: "កាលបរិច្ឆេទ",
    date_value: "ថ្ងៃសៅរ៍ ទី១៦ ខែមករា ២០២៧",
    time_label: "ម៉ោង",
    time_value: "ពិធីជប់លៀងចាប់ពីម៉ោង ៥ ល្ងាច",
    venue_label: "ទីកន្លែង",
    venue_value: "ភ្នំពេញ ហ្គ្រែន បូលរ៉ូម, ភ្នំពេញ",
    dress_code: "រូបសំអាង៖ ប្រពៃណីឯក / ព្រះបរម",

    // RSVP
    rsvp_label: "ការបញ្ជាក់ការចូលរួម",
    rsvp_accept: "✅ ទទួលយកដោយអំណរ",
    rsvp_decline: "🙏 សូមអភ័យទោស មិនអាចចូលរួម",
    rsvp_confirm: "បញ្ជាក់ការចូលរួម",
    rsvp_seats: "កៅអីដែលបានអនុញ្ញាតសម្រាប់ការអញ្ជើញ:",

    // Love Story
    love_story_title: "រឿងស្នេហ៍យើង",
    love_story_subtitle:
      "ដំណើរដ៏ស្រស់ស្អាតចាប់ផ្ដើមដោយមិត្តភាព រីករាលដាលដោយទំនុកចិត្ត ហើយថ្ងៃនេះបានបំពេញបានច្បាប់ជីវិត។",
    love_story_items: [
      { year: "2018", title: "ជួបគ្នាដំបូង", desc: "យើងបានជួបគ្នាក្នុងនាមមិត្តភាព ហើយបានរកឃើញក្ដីអំណរស្ងប់ស្ងាត់ក្នុងគ្រប់ការសន្ទនា។" },
      { year: "2020", title: "ធំដឹងក្តីជាមួយគ្នា", desc: "ពីក្ដីស្រមៃដល់ថ្ងៃពិបាក យើងបានដឹងពីអត្ថន័យពិតនៃការប្ដេជ្ញា។" },
      { year: "2022", title: "សន្យារស់ជានិច្ច", desc: "យើងបានសន្យាដើរឆ្ពោះតាមរដូវកាលទុកដាច់ ដៃក្នុងដៃ ដោយជំនឿ និងសប្បុរស។" },
      { year: "2027", title: "ថ្ងៃរៀបការ", desc: "ដោយដួងចិត្តដ៏វ័យ យើងអបអរការចាប់ផ្ដើមរស់រួមជីវិតជានិច្ចក្នុងនាមប្ដីប្រពន្ធ។" },
    ],

    // Ceremony Highlights
    ceremony_title: "ពិធីការ",
    ceremony_blessing_label: "ពិធីប្រគំ",
    ceremony_blessing_desc: "ពិធីប្រគំប្រពៃណី និងពិធីគោរពគ្រួសារនៅព្រឹក។",
    ceremony_reception_label: "ការទទួលភ្ញៀវ & ជប់លៀង",
    ceremony_reception_desc: "ពិធីជប់លៀងល្ងាចជាមួយអាហារ តន្ត្រី ការថ្លែងសុន្ទរកថា និងអំណរ។",

    // Gallery
    gallery_title: "កម្រងរូបភាពពីពិធីរៀបអាពាហ៍ពិពាហ៍",

    // Timeline
    timeline_overline: "កម្មវិធីមង្គលការ",
    timeline_title: "កម្មវិធីមង្គលការ",
    timeline_subtitle: "ភិរក្សបុត្រ × សុម៉ាលី",
    timeline_items: [
      { time: "06:00 ព្រឹក", title: "ពិធីសូត្រមន្ត", description: "ចាប់ផ្តើមពិធីដោយសូត្រមន្តសុំសិរីសួស្តី និងពរជ័យ។" },
      { time: "08:00 ព្រឹក", title: "ពិធីហែជំនូន", description: "ហែជំនូនតាមប្រពៃណី ជាមួយក្តីរំភើប និងអំណរ។" },
      { time: "10:00 ព្រឹក", title: "ពិធីកាត់សក់", description: "ពិធីប្រពៃណីតំណាងឱ្យពរជ័យសម្រាប់ជីវិតគូថ្មី។" },
      { time: "12:00 ថ្ងៃត្រង់", title: "ពិសារអាហារ", description: "អញ្ជើញភ្ញៀវកិត្តិយសពិសារអាហារថ្ងៃត្រង់ជុំគ្នា។" },
      { time: "06:00 ល្ងាច", title: "ពិធីជប់លៀង", description: "អបអរសាទរពិធីមង្គលការជាមួយតន្ត្រី និងការរាំលេង។" },
    ],

    // Location
    location_overline: "ទីតាំង",
    location_title: "ទីតាំង & ផែនទី",
    location_name: "ភ្នំពេញ ហ្គ្រែន បូលរ៉ូម",
    location_city: "ភ្នំពេញ, កម្ពុជា",
    location_map_btn: "បើកទីតាំង Google Maps",

    // Gift
    gift_overline: "អំណោយពីភ្ញៀវ",
    gift_title: "ជូនពរ និងអំណោយ",
    gift_qr: "ស្កេន QR សម្រាប់អំណោយ",
    gift_contact: "ទំនាក់ទំនង:",

    // Thank You
    thank_you_overline: "ពាក្យអរគុណ",
    thank_you_title: "សូមអរគុណពីដួងចិត្ត",
    thank_you_text:
      "សូមអរគុណចំពោះក្តីស្រឡាញ់ ការគាំទ្រ និងការចំណាយពេលវេលាមកចូលរួមថ្ងៃពិសេសរបស់យើង។ វត្តមានរបស់អ្នកគឺជាអំណោយដ៏មានតម្លៃបំផុតសម្រាប់គ្រួសារថ្មីរបស់យើង។",

    // Apology
    apology_overline: "លខិតសុំអភ័យទោស",
    apology_title: "លខិតសុំអភ័យទោស",
    apology_text:
      "យើងខ្ញុំសូមអភ័យទោស ប្រសិនបើមានការខ្វះខាតណាមួយក្នុងពិធីមង្គលការ។ ការអភ័យទោស និងការចូលរួមរបស់អ្នកមានន័យយ៉ាងខ្លាំងចំពោះយើង។",

    // Classic Khmer Card
    card_title: "សិរីមង្គលអាពាហ៍ពិពាហ៍",
    card_groom_family: "គ្រួសារកូនប្រុស",
    card_bride_family: "គ្រួសារកូនស្រី",
    card_father: "ឪពុក៖",
    card_mother: "ម្ដាយ៖",
    card_invite_text:
      "ឯកឧត្តម អ្នកឧកញ៉ា លោកជំទាវ លោក លោកស្រី អ្នកនាងកញ្ញា អញ្ជើញចូលរួមជាភ្ញៀវកិត្តិយស ដើម្បីប្រសិទ្ធពរជ័យសិរីមង្គលក្នុងពិធីរៀបអាពាហ៍ពិពាហ៍កូនប្រុសស្រីរបស់យើងខ្ញុំ",
    card_groom_label: "កូនប្រុសនាម",
    card_bride_label: "កូនស្រីនាម",
    card_date_text:
      "ដែលនឹងប្រារពនៅ ថ្ងៃសៅរ៍ ទី១៦ ខែមករា ឆ្នាំ២០២៧ ត្រូវនឹងថ្ងៃ ៧កើត ខែមាឃ សប្តស័ក ព.ស. ២៥៦៩ នៅវេលាម៉ោង ៥ល្ងាច នៅគេហដ្ឋានខាងស្រី ដោយមេត្រីភាព។",

    // Countdown
    countdown_overline: "រាប់ថ្ងៃ",
    countdown_title: "រាប់រៀងរាល់ក្ដីស្រឡាញ់",
    calendar_label: "ប្រតិទិន • ខែមករា ២០២៧",
    days: "ថ្ងៃ",
    hours: "ម៉ោង",
    minutes: "នាទី",
    seconds: "វិនាទី",

    // Menu
    menu_hero: "ទំព័រដើម",
    menu_details: "ព័ត៌មាន",
    menu_love: "រឿងស្នេហ៍",
    menu_gallery: "រូបភាព",
    menu_location: "ទីតាំង",
    menu_gift: "អំណោយ",
  },
} as const;

export type Translations = typeof translations.en;

export function t(lang: Lang): Translations {
  return translations[lang] as unknown as Translations;
}
