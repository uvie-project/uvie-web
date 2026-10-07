export const LOCALES = ["vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_PATH: Record<Locale, string> = {
  vi: "/",
  en: "/en/",
};

const vi = {
  htmlLang: "vi",
  meta: {
    title: "UVie - Bộ gõ tiếng Việt nhanh, nhẹ và chuẩn cho macOS",
    description:
      "Bộ gõ tiếng Việt mã nguồn mở cho macOS, vận hành bởi engine Rust siêu tốc: đủ Telex & VNI, dấu thanh chuẩn mới, macro, tự nhớ ngôn ngữ theo từng app. Nhẹ dưới 2 MB, cài chưa tới một phút.",
    keywords:
      "bộ gõ tiếng Việt, macOS, Telex, VNI, Vietnamese input method, bộ gõ macOS, UVie",
  },
  nav: {
    features: "Tính năng",
    performance: "Hiệu năng",
    download: "Tải xuống",
    github: "GitHub",
  },
  hero: {
    badge: "Mã nguồn mở • MIT OR Apache-2.0",
    title: "Gõ tiếng Việt",
    titleHighlight: "nhanh như nghĩ",
    subtitle:
      "Bộ gõ tiếng Việt cho macOS với engine Rust siêu tốc - mỗi phím chỉ tốn chưa tới một micro giây. Nhẹ, chuẩn chính tả, và không bao giờ làm bạn phải chờ.",
    ctaDownload: "Tải cho macOS",
    ctaGithub: "Xem trên GitHub",
    ctaNote: "macOS 13+ • Apple Silicon & Intel • Miễn phí",
    demoLabel: "Trải nghiệm trực tiếp",
    demoHint: "Engine xử lý từng phím gõ ngay tại chỗ",
  },
  stats: {
    items: [
      { value: "< 1 µs", label: "cho mỗi từ gõ" },
      { value: "1.7 MB", label: "bộ cài DMG" },
      { value: "~14 MB", label: "RAM khi chạy nền" },
      { value: "99.98%", label: "độ chính xác Telex" },
    ],
  },
  features: {
    eyebrow: "Tính năng",
    title: "Đủ mọi thứ bạn cần ở một bộ gõ",
    subtitle:
      "Tính năng nằm ngay trong lõi engine - không phải vá víu bên ngoài.",
    items: [
      {
        title: "Telex & VNI",
        description:
          "Hỗ trợ trọn vẹn hai kiểu gõ thông dụng nhất. Đổi kiểu gõ bất cứ lúc nào trong phần cài đặt.",
      },
      {
        title: "Dấu thanh chuẩn mới",
        description:
          "Tuỳ chọn đặt dấu theo chính tả hiện đại: gõ hoas ra hoá, thay vì hoà.",
      },
      {
        title: "Viết tắt vần cuối",
        description:
          "g thành ng, h thành nh: gõ đạg ra đặng, nhah ra nhạnh. Tuỳ chọn, mặc định tắt.",
      },
      {
        title: "Sửa từ đã gõ",
        description:
          "Lùi con trỏ về một trong 8 từ gần nhất - kể cả vào giữa từ - rồi gõ phím dấu, từ được dựng lại ngay tại chỗ.",
      },
      {
        title: "Esc trả lại chữ gốc",
        description:
          "Dấu lỡ đặt sai ý? Nhấn Escape để khôi phục đúng chuỗi phím đã gõ - viêt lại thành vieet.",
      },
      {
        title: "Hiểu cả tiếng Anh",
        description:
          "Từ điển ~15 nghìn từ giữ nguyên chữ tiếng Anh - permission hay system không bị đổi thành tiếng Việt.",
      },
      {
        title: "Macro văn bản",
        description:
          "Đặt gõ tắt riêng cho mình - gõ mk ra mình không, dùng được ở mọi ứng dụng.",
      },
      {
        title: "Nhớ ngôn ngữ theo app",
        description:
          "Tự bật tiếng Việt ở app quen thuộc, tự tắt ở app không cần - bạn không phải chuyển tay.",
      },
      {
        title: "Tự nhường chỗ khi cần",
        description:
          "Đang dùng bàn phím Nhật, Hàn, Trung hay Nga? UVie tự tạm dừng, không can thiệp gì cả.",
      },
      {
        title: "Chuyển đổi tức thì",
        description:
          "Nhấn nhanh Fn, đặt phím tắt riêng, hay thậm chí bấm riêng tổ hợp ⌘⇧ cũng đổi được Anh/Việt.",
      },
      {
        title: "Gõ được ở mọi nơi",
        description:
          "Chế độ AX giúp gõ trong Spotlight và ô nhập bảo mật. Ứng dụng Chromium cũng nhận diện sẵn.",
      },
      {
        title: "Nhẹ như không có",
        description:
          "Không chiếm chỗ ở Dock, chỉ một icon nhỏ trên menu bar. Gõ cả ngày vẫn chỉ ~0.3% CPU.",
      },
    ],
  },
  performance: {
    eyebrow: "uvie-rs engine",
    title: "Nhanh đến mức bạn quên mất nó đang chạy",
    subtitle:
      "Engine viết bằng Rust, không phụ thuộc thư viện ngoài, chạy được cả môi trường no_std. Mỗi phím gõ chỉ là vài phép đổi bit - không dựng lại từ đầu.",
    bullets: [
      {
        title: "Diff API",
        description:
          "Mỗi phím trả về (số lần xoá, phần cần gõ thêm) - màn hình chỉ cập nhật đúng phần thay đổi.",
      },
      {
        title: "Xoá lùi O(1)",
        description:
          "Nhờ ngăn xếp snapshot, backspace quay ngược trạng thái tức thì, không phải dựng lại từ đầu.",
      },
      {
        title: "Không đụng tới heap",
        description:
          "Mọi buffer nằm sẵn trên stack - không một lần cấp phát bộ nhớ nào trong lúc gõ.",
      },
      {
        title: "Kiểm chứng dương",
        description:
          "Chuỗi phím được đối chiếu với bảng âm tiết trước khi biến đổi - gõ tiếng Anh thì đi qua nguyên vẹn.",
      },
    ],
    benchTitle: "Thời gian xử lý mỗi từ (Apple Silicon)",
    bench: [
      { scenario: "Từ ghép - nghiếng", time: "547 ns", note: "9 phím" },
      { scenario: "Âm tiết sâu - được", time: "476 ns", note: "9 phím" },
      { scenario: "Gõ rồi xoá liên tục", time: "630 ns", note: "16 phím" },
      { scenario: "Câu 107 ký tự trộn Việt–Anh", time: "6.4 µs", note: "107 phím" },
    ],
    benchFootnote:
      "Một phép đo là một nhịp gõ tự nhiên: một từ, một câu, hoặc một vòng gõ rồi xoá.",
  },
  download: {
    eyebrow: "Tải xuống",
    title: "Sẵn sàng gõ mượt hơn?",
    subtitle:
      "Miễn phí, mã nguồn mở, cài chưa tới một phút. UVie nằm gọn trên menu bar và không bao giờ phiền bạn.",
    primary: "Tải DMG cho macOS",
    secondary: "Xem tất cả bản phát hành",
    steps: [
      {
        title: "Tải & mở DMG",
        description: "Kéo UVieMac vào thư mục Applications.",
      },
      {
        title: "Cấp quyền",
        description:
          "Làm theo hướng dẫn - cấp quyền Accessibility (và Input Monitoring trên macOS 15+).",
      },
      {
        title: "Bắt đầu gõ",
        description:
          "Icon V / E hiện lên menu bar. Nhấn nhanh Fn để đổi Anh/Việt.",
      },
    ],
    roadmapLabel: "Sắp ra mắt",
    roadmap: [
      {
        title: "UVie cho Linux",
        description:
          "Hỗ trợ desktop Linux (X11/Wayland) cũng nằm trong kế hoạch. Theo dõi tổ chức GitHub để không bỏ lỡ.",
      },
    ],
  },
  windowsLaunch: {
    badge: "Mới ra mắt",
    title: "Chào mừng UVie for Windows 🎉",
    subtitle:
      "Cùng engine uvie-rs siêu tốc, nay đã chính thức có mặt trên Windows - viết bằng Rust và WinUI 3, gọn nhẹ và mã nguồn mở như bản macOS.",
    cta: "Tải UVie for Windows",
    ctaSecondary: "Xem mã nguồn",
    note: "v0.1.1 • Windows 10/11 64-bit • Miễn phí & mã nguồn mở",
    installNote:
      "Giải nén và chạy uvie-win.exe - icon UVie sẽ hiện trên khay hệ thống. Cài thêm Windows App SDK Runtime để mở cửa sổ cài đặt.",
    bullets: [
      "Telex & VNI đầy đủ",
      "Macro văn bản",
      "Nhớ ngôn ngữ theo app",
      "Tương thích app Chromium",
    ],
    screenshotAlt: "Cửa sổ cài đặt UVie for Windows",
  },
  footer: {
    tagline: "Bộ gõ tiếng Việt mã nguồn mở - vận hành bởi engine Rust uvie-rs.",
    projects: "Dự án",
    resources: "Tài nguyên",
    engine: "uvie-rs - Engine Rust",
    macApp: "uvie-mac - Ứng dụng macOS",
    winApp: "uvie-win - Ứng dụng Windows",
    releases: "Bản phát hành",
    issues: "Báo lỗi",
    license: "MIT OR Apache-2.0",
    rights: "Nhóm UVie. Xây bằng Rust & Swift.",
  },
  langLabel: "Tiếng Việt",
  langSwitchTo: "English",
};

const en: typeof vi = {
  htmlLang: "en",
  meta: {
    title: "UVie - Fast, lightweight & accurate Vietnamese input for macOS",
    description:
      "Open-source Vietnamese input method for macOS powered by an ultra-fast Rust engine: Telex & VNI, modern tone placement, macros, per-app language memory. Under 2 MB, ready in a minute.",
    keywords:
      "Vietnamese input method, macOS, Telex, VNI, Vietnamese keyboard, IME, UVie",
  },
  nav: {
    features: "Features",
    performance: "Performance",
    download: "Download",
    github: "GitHub",
  },
  hero: {
    badge: "Open source • MIT OR Apache-2.0",
    title: "Type Vietnamese",
    titleHighlight: "as fast as you think",
    subtitle:
      "A Vietnamese input method for macOS powered by an ultra-fast Rust engine - under a microsecond per keystroke. Lightweight, accurate, and respectful of how you type.",
    ctaDownload: "Download for macOS",
    ctaGithub: "View on GitHub",
    ctaNote: "macOS 13+ • Apple Silicon & Intel • Free",
    demoLabel: "Live demo",
    demoHint: "The engine processes every keystroke in real time",
  },
  stats: {
    items: [
      { value: "< 1 µs", label: "per typed word" },
      { value: "1.7 MB", label: "DMG download size" },
      { value: "~14 MB", label: "RAM in background" },
      { value: "99.98%", label: "Telex accuracy" },
    ],
  },
  features: {
    eyebrow: "Features",
    title: "Everything you need from an input method",
    subtitle:
      "Built into the heart of the engine - not patched on top of character passes.",
    items: [
      {
        title: "Telex & VNI",
        description:
          "Full support for both popular input methods. Switch anytime in settings.",
      },
      {
        title: "Modern orthography",
        description:
          "Optional tone placement per the new standard: hoas → hoá instead of hoà.",
      },
      {
        title: "Relaxed coda",
        description:
          "g → ng, h → nh: type đạg instead of đặng, nhah instead of nhạnh. Optional, off by default.",
      },
      {
        title: "Edit committed words",
        description:
          "Arrow back into any of the last 8 words - even mid-word - and type a tone key; the word re-renders in place.",
      },
      {
        title: "Esc restores raw input",
        description:
          "Tone landed where you didn't mean it? Escape restores the exact keys you typed - viêt back to vieet.",
      },
      {
        title: "Understands English",
        description:
          "A ~15k-word dictionary keeps English literal - permission and system stay English while Vietnamese still gets tones.",
      },
      {
        title: "Text macros",
        description:
          "Your own abbreviations everywhere - mk → mình không, expanded in any app.",
      },
      {
        title: "Per-app language memory",
        description:
          "Automatically toggles Vietnamese on or off for each application, remembering your choice.",
      },
      {
        title: "Non-Latin auto-pause",
        description:
          "Pauses itself when a non-Latin keyboard is active - Japanese, Korean, Chinese, Russian…",
      },
      {
        title: "Instant switching",
        description:
          "Tap Fn, a custom global shortcut, or even a modifier-only chord like bare ⌘⇧.",
      },
      {
        title: "Works everywhere",
        description:
          "AX mode for Spotlight and secure text fields. Chromium apps handled natively.",
      },
      {
        title: "Featherweight",
        description:
          "No Dock icon - lives in the menu bar. ~0.3% CPU while typing, 1.7 MB on disk.",
      },
    ],
  },
  performance: {
    eyebrow: "uvie-rs engine",
    title: "So fast you'll never think about it",
    subtitle:
      "A Rust engine with zero dependencies, no_std compatible, with a fully stack-allocated hot path. Every keystroke is a bit-flip, not a rebuild.",
    bullets: [
      {
        title: "Diff-based API",
        description:
          "Each keystroke returns (backspaces, suffix) - the minimal edit to the screen.",
      },
      {
        title: "O(1) backspace",
        description:
          "A snapshot stack walks state back instantly - no O(n²) rebuild.",
      },
      {
        title: "Zero heap in hot path",
        description:
          "All buffers are stack-allocated. Zero allocations per keystroke.",
      },
      {
        title: "Positive validation",
        description:
          "Raw keystrokes are validated against syllable tables - English passes through untouched.",
      },
    ],
    benchTitle: "Time per typed word (Apple Silicon)",
    bench: [
      { scenario: "Compound word - nghiếng", time: "547 ns", note: "9 keys" },
      { scenario: "Deep syllable - được", time: "476 ns", note: "9 keys" },
      { scenario: "Type + backspace burst", time: "630 ns", note: "16 keys" },
      { scenario: "107-char mixed sentence", time: "6.4 µs", note: "107 keys" },
    ],
    benchFootnote:
      "One operation = one natural typing unit (a word, a sentence, or a type + delete cycle).",
  },
  download: {
    eyebrow: "Download",
    title: "Ready to type faster?",
    subtitle:
      "Free, open source, and installed in a minute. UVie lives in your menu bar and stays out of the way.",
    primary: "Download DMG for macOS",
    secondary: "Browse all releases",
    steps: [
      {
        title: "Download & open",
        description: "Open the DMG and drag UVieMac into Applications.",
      },
      {
        title: "Grant access",
        description:
          "Follow onboarding - grant Accessibility (and Input Monitoring on macOS 15+).",
      },
      {
        title: "Start typing",
        description:
          "A V / E icon appears in the menu bar. Tap Fn to switch languages.",
      },
    ],
    roadmapLabel: "Coming soon",
    roadmap: [
      {
        title: "UVie for Linux",
        description:
          "Desktop Linux support (X11/Wayland) is on the roadmap. Watch the GitHub org to get notified.",
      },
    ],
  },
  windowsLaunch: {
    badge: "Just launched",
    title: "Welcome UVie for Windows 🎉",
    subtitle:
      "The same ultra-fast uvie-rs engine, now officially on Windows - built in Rust with WinUI 3, as light and open as the macOS app.",
    cta: "Download UVie for Windows",
    ctaSecondary: "View source",
    note: "v0.1.1 • Windows 10/11 64-bit • Free & open source",
    installNote:
      "Unzip and run uvie-win.exe - the UVie icon appears in the system tray. Install the Windows App SDK Runtime to open the settings window.",
    bullets: [
      "Full Telex & VNI",
      "Text macros",
      "Per-app language memory",
      "Chromium app compatible",
    ],
    screenshotAlt: "UVie for Windows settings window",
  },
  footer: {
    tagline: "Open-source Vietnamese input method, powered by the uvie-rs Rust engine.",
    projects: "Project",
    resources: "Resources",
    engine: "uvie-rs - Rust engine",
    macApp: "uvie-mac - macOS app",
    winApp: "uvie-win - Windows app",
    releases: "Releases",
    issues: "Issue tracker",
    license: "MIT OR Apache-2.0",
    rights: "The UVie team. Built with Rust & Swift.",
  },
  langLabel: "English",
  langSwitchTo: "Tiếng Việt",
};

export const dictionaries = { vi, en } as const;
export type Dictionary = typeof vi;

export function getDict(locale: Locale): Dictionary {
  return dictionaries[locale];
}
