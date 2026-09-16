export const LOCALES = ["vi", "en"] as const;
export type Locale = (typeof LOCALES)[number];

export const LOCALE_PATH: Record<Locale, string> = {
  vi: "/",
  en: "/en/",
};

const vi = {
  htmlLang: "vi",
  meta: {
    title: "UVie — Bộ gõ tiếng Việt nhanh, nhẹ và chính xác cho macOS",
    description:
      "Bộ gõ tiếng Việt mã nguồn mở cho macOS với engine Rust siêu tốc: Telex & VNI, dấu thanh chuẩn mới, macro, nhớ ngôn ngữ theo ứng dụng. Dưới 2 MB, mở trong tích tắc.",
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
      "Bộ gõ tiếng Việt cho macOS được vận hành bởi engine Rust siêu tốc — dưới một micro giây cho mỗi phím. Nhẹ, chính xác và tôn trọng cách bạn gõ.",
    ctaDownload: "Tải xuống cho macOS",
    ctaGithub: "Xem trên GitHub",
    ctaNote: "macOS 13+ • Apple Silicon & Intel • Miễn phí",
    demoLabel: "Trải nghiệm trực tiếp",
    demoHint: "Engine xử lý từng phím gõ theo thời gian thực",
  },
  stats: {
    items: [
      { value: "< 1 µs", label: "mỗi từ gõ" },
      { value: "1.7 MB", label: "dung lượng DMG" },
      { value: "~14 MB", label: "RAM khi chạy nền" },
      { value: "99.98%", label: "độ chính xác Telex" },
    ],
  },
  features: {
    eyebrow: "Tính năng",
    title: "Mọi thứ bạn cần từ một bộ gõ",
    subtitle:
      "Được xây dựng từ trái tim của engine — không phải vá qua các lớp xử lý ký tự.",
    items: [
      {
        title: "Telex & VNI",
        description:
          "Hỗ trợ đầy đủ hai kiểu gõ phổ biến nhất, chuyển đổi ngay trong phần cài đặt.",
      },
      {
        title: "Dấu thanh chuẩn mới",
        description:
          "Tùy chọn đặt dấu theo chính tả hiện đại: hoas → hoá, thay vì hoà.",
      },
      {
        title: "Viết tắt vần cuối",
        description:
          "g → ng, h → nh: gõ đạg thay vì đặng, nhah thay vì nhạnh. Tùy chọn, mặc định tắt.",
      },
      {
        title: "Macro văn bản",
        description:
          "Gõ tắt do bạn định nghĩa — mk → mình không, ngay trong mọi ứng dụng.",
      },
      {
        title: "Nhớ ngôn ngữ theo app",
        description:
          "Tự động bật/tắt tiếng Việt cho từng ứng dụng, nhớ lựa chọn của bạn.",
      },
      {
        title: "Tự phát hiện bàn phím",
        description:
          "Tự động tạm dừng khi phát hiện bàn phím không Latin: Nhật, Hàn, Trung, Nga…",
      },
      {
        title: "Chuyển đổi tức thì",
        description:
          "Nhấn nhanh Fn, phím tắt toàn hệ thống tùy chỉnh, hoặc chỉ-phím-bổ-trợ như ⌘⇧.",
      },
      {
        title: "Hoạt động ở mọi nơi",
        description:
          "Chế độ AX cho Spotlight và ô nhập liệu bảo mật. Tự nhận diện ứng dụng Chromium.",
      },
      {
        title: "Nhẹ như không có",
        description:
          "Không icon Dock, chỉ menu bar. ~0.3% CPU khi gõ, 1.7 MB trên đĩa.",
      },
    ],
  },
  performance: {
    eyebrow: "uvie-rs engine",
    title: "Nhanh đến mức bạn không bao giờ nghĩ đến nó",
    subtitle:
      "Engine Rust với zero dependencies, tương thích no_std, toàn bộ đường nóng nằm trên stack. Mỗi phím gõ là một phép biến đổi bit — không phải dựng lại từ đầu.",
    bullets: [
      {
        title: "Diff API",
        description:
          "Mỗi phím trả về (số phím backspace, chuỗi cần gõ) — cập nhật màn hình tối thiểu.",
      },
      {
        title: "Backspace O(1)",
        description:
          "Ngăn xếp snapshot cho phép quay ngược trạng thái tức thì, không dựng lại O(n²).",
      },
      {
        title: "Không cấp phát heap",
        description:
          "Toàn bộ buffer nóng được cấp phát trên stack — zero allocation mỗi phím.",
      },
      {
        title: "Kiểm chứng dương",
        description:
          "Chuỗi phím thô được kiểm tra với bảng âm tiết trước khi biến đổi — tiếng Anh tự động đi qua.",
      },
    ],
    benchTitle: "Thời gian xử lý mỗi từ (Apple Silicon)",
    bench: [
      { scenario: "Từ ghép — nghiếng", time: "547 ns", note: "9 phím" },
      { scenario: "Âm tiết sâu — được", time: "476 ns", note: "9 phím" },
      { scenario: "Gõ + xóa liên tục", time: "630 ns", note: "16 phím" },
      { scenario: "Câu 107 ký tự Việt–Anh", time: "6.4 µs", note: "107 phím" },
    ],
    benchFootnote:
      "Một phép đo = một đơn vị gõ tự nhiên (một từ, một câu hoặc một chu kỳ gõ + xóa).",
  },
  download: {
    eyebrow: "Tải xuống",
    title: "Sẵn sàng gõ nhanh hơn?",
    subtitle:
      "Tải miễn phí, cài trong một phút. UVie sống trên menu bar và im lặng cho đến khi bạn cần.",
    primary: "Tải DMG cho macOS",
    secondary: "Xem tất cả bản phát hành",
    steps: [
      {
        title: "Tải & mở DMG",
        description: "Kéo UVieMac.app vào thư mục Applications.",
      },
      {
        title: "Cấp quyền",
        description:
          "Làm theo onboarding — cấp quyền Accessibility (và Input Monitoring trên macOS 15+).",
      },
      {
        title: "Bắt đầu gõ",
        description:
          "Icon V / E xuất hiện trên menu bar. Nhấn Fn để chuyển Anh/Việt.",
      },
    ],
    roadmapLabel: "Sắp ra mắt",
    roadmapTitle: "UVie cho Windows",
    roadmapDescription:
      "Cùng engine uvie-rs, đang được phát triển cho Windows. Theo dõi tổ chức GitHub để nhận thông báo.",
  },
  footer: {
    tagline: "Bộ gõ tiếng Việt mã nguồn mở, powered by engine Rust uvie-rs.",
    projects: "Dự án",
    resources: "Tài nguyên",
    engine: "uvie-rs — Engine Rust",
    macApp: "uvie-mac — Ứng dụng macOS",
    releases: "Bản phát hành",
    issues: "Báo lỗi",
    license: "MIT OR Apache-2.0",
    rights: "Nhóm UVie. Xây dựng bằng Rust & Swift.",
  },
  langLabel: "Tiếng Việt",
  langSwitchTo: "English",
};

const en: typeof vi = {
  htmlLang: "en",
  meta: {
    title: "UVie — Fast, lightweight & accurate Vietnamese input for macOS",
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
      "A Vietnamese input method for macOS powered by an ultra-fast Rust engine — under a microsecond per keystroke. Lightweight, accurate, and respectful of how you type.",
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
      "Built into the heart of the engine — not patched on top of character passes.",
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
        title: "Text macros",
        description:
          "Your own abbreviations everywhere — mk → mình không, expanded in any app.",
      },
      {
        title: "Per-app language memory",
        description:
          "Automatically toggles Vietnamese on or off for each application, remembering your choice.",
      },
      {
        title: "Non-Latin auto-pause",
        description:
          "Pauses itself when a non-Latin keyboard is active — Japanese, Korean, Chinese, Russian…",
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
          "No Dock icon — lives in the menu bar. ~0.3% CPU while typing, 1.7 MB on disk.",
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
          "Each keystroke returns (backspaces, suffix) — the minimal edit to the screen.",
      },
      {
        title: "O(1) backspace",
        description:
          "A snapshot stack walks state back instantly — no O(n²) rebuild.",
      },
      {
        title: "Zero heap in hot path",
        description:
          "All buffers are stack-allocated. Zero allocations per keystroke.",
      },
      {
        title: "Positive validation",
        description:
          "Raw keystrokes are validated against syllable tables — English passes through untouched.",
      },
    ],
    benchTitle: "Time per typed word (Apple Silicon)",
    bench: [
      { scenario: "Compound word — nghiếng", time: "547 ns", note: "9 keys" },
      { scenario: "Deep syllable — được", time: "476 ns", note: "9 keys" },
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
          "Follow onboarding — grant Accessibility (and Input Monitoring on macOS 15+).",
      },
      {
        title: "Start typing",
        description:
          "A V / E icon appears in the menu bar. Tap Fn to switch languages.",
      },
    ],
    roadmapLabel: "Coming soon",
    roadmapTitle: "UVie for Windows",
    roadmapDescription:
      "Same uvie-rs engine, now in development for Windows. Watch the GitHub org to get notified.",
  },
  footer: {
    tagline: "Open-source Vietnamese input method, powered by the uvie-rs Rust engine.",
    projects: "Project",
    resources: "Resources",
    engine: "uvie-rs — Rust engine",
    macApp: "uvie-mac — macOS app",
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
