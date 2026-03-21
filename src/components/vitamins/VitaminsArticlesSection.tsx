import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { Container } from "../ui/Container";

const CYAN = "#6FE6C1";

const articles = [
  {
    title: "ПРОГРАММА ПО ФУНКЦИОНАЛЬНОМУ ВОССТАНОВЛЕНИЮ ОБМЕНА ВЕЩЕСТВ, ХАРАКТЕРИЗУЮЩЕЕСЯ ПРОГРЕССИРУЮЩИМ ПОРАЖЕНИЕМ КОСТНОЙ ТКАНИ",
    theme: "МЕТАБОЛИЗМ",
    content: (
        <div className="space-y-6">
          <p>Нарушение обмена веществ в костной ткани — это серьезная медико-социальная проблема, требующая комплексного подхода. В нашем центре разработана уникальная программа по функциональному восстановлению костных структур, основанная на восполнении биохимических дефицитов.</p>
          <p>Костная ткань — это живая динамическая структура. Ее прочность напрямую зависит от баланса кремния, кальция и синтеза коллагена. Прогрессирующее поражение часто связано с недостаточностью микроэлементов, которые питают периост (надкостницу).</p>
          <p>Наша методика включает как остеопатическую коррекцию для улучшения микроциркуляции в пораженных зонах, так и применение высококонцентрированных натуральных комплексов, стимулирующих работу остеобластов.</p>
        </div>
    )
  },
  {
    title: "ПРОГРАММА КОМПЕНСАТОРНО-ВОССТАНОВИТЕЛЬНЫХ МЕРОПРИЯТИЙ ПОСЛЕ СПОРТИВНЫХ СОРЕВНОВАНИЙ И ИНТЕНСИВНЫХ ФИЗИЧЕСКИХ НАГРУЗОК",
    theme: "СПОРТ",
    content: (
        <div className="space-y-8">
            <div className="space-y-4">
                <h4 className="text-[#6FE6C1] font-bold text-xl uppercase italic">Основные причины для применения программы восстановительных мер для людей с интенсивными физическими нагрузками</h4>
                <ul className="space-y-3 border-l-2 border-[#6FE6C1]/20 pl-6 h-full">
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Увеличенные физические нагрузки в период тренировок</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Хроническое утомление на фоне интенсивных физических нагрузок</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Усиленное напряжение психо-эмоционального состояния приводящего к гормональному дисбалансу</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Интенсивный тренировочный процесс с минимальными интервалами на отдых,что приводит к наибольшему расходу энергии и усиленной работе сердечно-сосудистой системы</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Постоянная чрезмерная нагрузка способствует максимальному расходу витаминов и микроэлементов организма.</li>
                </ul>
            </div>
            <div className="space-y-4">
                <h4 className="text-[#6FE6C1] font-bold text-xl uppercase italic">Эффективность данной программы</h4>
                <ul className="space-y-3 border-l-2 border-[#6FE6C1]/20 pl-6 h-full">
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Улучшает усвоение питательных спортивных добавок и функционального спортивного питания, улучшает пищеварение.</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Восполняет недостаток всех витаминов и минералов при интенсивных физических и спортивных нагрузках</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Поддерживает иммунную систему, помогая в выработке антител</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Способствует построению клеток сердечной мышцы, скелетных мышц, нервной ткани, в том числе и центральной нервной системы.</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Участвует в восстановлении мышечной ткани</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Способствует выведению токсинов, образовавшихся в результате приема других добавок, удалению тяжелых металлов, токсинов из желудка и печени ,усиливает действия инсулина.</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Обеспечивает здоровье кровеносных сосудов</li>
                    <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Помогает поддерживать нормальную массу тела, ускоряет процесс насыщения</li>
                </ul>
            </div>
        </div>
    )
  },
  {
    title: "БЕРЕМЕННОСТЬ",
    theme: "ЗДОРОВЬЕ",
    content: (
        <div className="space-y-6">
          <p>Сейчас существует много комплексов веществ для беременных. Их, строго говоря, можно разделить на две группы. В одну группу входят препараты содержащие витамины, которые были получены синтетическим (химическим) путем. Их эффект не оспорим, конечно, если комплекс составлен правильно. Но их недостатком является узость состава, а также возможная нежелательная нагрузка на организм женщины – почки, печень и т.д., а если учесть что эта нагрузка в период беременности повышается, то риск возникновения нежелательных эффектов возрастает в разы.</p>
          <p>Другая группа препараты растительного происхождения, создают минимальную нагрузку на организм, обладают широким спектром биологического действия. Главный их недостаток – низкое содержание питательных веществ, а также не очень высокая биодоступность питательных веществ. Да, конечно, они безвредны. Но и толку от них не особо много. Так как же поддержать организм женщины в период беременности наиболее оптимально? Решение лежит на стыке двух групп этих продуктов. Суть в том, чтобы повысить биологическую ценность и биодоступность питательных веществ в природном сырье.</p>
          <p>Именно здесь приходят на помощь научные достижения. Компания создала линейку таких продуктов. И далее мы попытаемся распределить их применение в течение всей беременности в зависимости от потребностей организма женщины. Для этого мы воспользуемся классической схемой разделения беременности на триместры, которая доказала свою эффективность.</p>
        </div>
    )
  },
  {
    title: "СИМПТОМЫ ДЕФИЦИТА КРЕМНИЯ",
    theme: "D-ТЕСТ",
    content: (
        <div className="space-y-6 flex flex-col items-center">
          <ul className="space-y-3 w-full border-l-2 border-[#6FE6C1]/20 pl-6 h-full">
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Слабость связок, сухожилий, хрящей, соединительной ткани в бронхолегочной системе.</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Частые переломы, растяжения, вывихи без видимых причин, остеопороз.</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Ломкость и выпадение волос.</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Длительное заживление ран, ушибов, кровоподтеков (синяков).</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Воспалительные заболевания желудочно-кишечного тракта.</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Высокий уровень холестерина, раннее развитие атеросклероза.</li>
            <li className="flex items-start gap-3"><span className="text-[#6FE6C1] mt-1">—</span> Импотенция, бесплодие.</li>
          </ul>
          <p className="mt-8 pt-8 border-t border-white/5 w-full">В результате экспериментальных исследований была разработана новая технология получения растворимых мономолекулярных хелатированных форм микроэлементов с использованием только натуральных растительных компонентов. Компания внедрила в производство специальное оборудование, разработанное по собственным чертежам, внедрила алгоритм и тщательно подобранные режимы производственного процесса, позволяющие получить легкоусвояемые хелатные комплексы из любого растительного сырья без использования химических реагентов</p>
        </div>
    )
  },
  {
    title: "РЕАБИЛИТАЦИЯ ПОСЛЕ СOVID-19",
    theme: "ТЕРАПИЯ",
    content: (
        <div className="space-y-8">
            <p>Люди, переболевшие новой коронавирусной инфекцией, даже после выписки из стационара месяцами не могут прийти в себя: организм нуждается в восстановлении, мозг отказывается выполнять свои функции, усталость мешает активной жизни, а проявившиеся хронические болезни доставляют множество тревоги и дискомфорта.<br />Да и болезнь, перенесенная в легкой форме, может надолго выбить из колеи</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
                <div className="space-y-4">
                    <h5 className="text-[#6FE6C1] font-bold uppercase tracking-widest text-sm">Общее состояние</h5>
                    <ul className="space-y-2 opacity-80 border-l border-[#6FE6C1]/20 pl-4 h-full">
                        <li>— Приступы слабости и ночные поты</li>
                        <li>— Нарушение ритмов жизнедеятельности</li>
                        <li>— Необъяснимые познаблевания</li>
                        <li>— Резкое снижение толерантности к нагрузке</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[#6FE6C1] font-bold uppercase tracking-widest text-sm">Бронхолегочная система</h5>
                    <ul className="space-y-2 opacity-80 border-l border-[#6FE6C1]/20 pl-4 h-full">
                        <li>— Нарушения дыхательные</li>
                        <li>— Заложенность в груди, нехватка воздуха</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[#6FE6C1] font-bold uppercase tracking-widest text-sm">Желудок и кишечник</h5>
                    <ul className="space-y-2 opacity-80 border-l border-[#6FE6C1]/20 pl-4 h-full">
                        <li>— Отсутствие аппетита и нарушения стула</li>
                        <li>— Нарушение прохождения пищи по ЖКТ</li>
                    </ul>
                </div>
                <div className="space-y-4">
                    <h5 className="text-[#6FE6C1] font-bold uppercase tracking-widest text-sm">Сердце и сосуды</h5>
                    <ul className="space-y-2 opacity-80 border-l border-[#6FE6C1]/20 pl-4 h-full">
                        <li>— Нарушение регуляции АД и ритма</li>
                        <li>— Высокий риск инсульта и инфаркта</li>
                    </ul>
                </div>
            </div>

            <p>Коронавирус бьет по уязвимым местам и вернуться к привычному ритму жизни после него непросто. По рекомендации ВОЗ чем раньше начать восстановительный период, тем меньше риск развития тяжелых последствий.</p>
            <p>Данный пакет услуг поможет: Восстановить тканевое дыхание, стабилизировать работу нервной системы, нормализовать циркуляцию крови и обменные процессы.</p>
        </div>
    )
  },
  {
    title: "ПРОГРАММА ПО ФУНКЦИОНАЛЬНОМУ ВОССТАНОВЛЕНИЮ И ПРОФИЛАКТИКЕ ДЕГЕНЕРАТИВНЫХ ИЗМЕНЕНИЙ СУСТАВНОГО ХРЯЩА",
    theme: "СУСТАВЫ",
    content: (
        <div className="space-y-8">
            <p>Остеохондроз, Остеоартроз, Артроз, Артрит – группа болезней суставов дегенеративно-воспалительного характера, имеющих разное происхождение и близкие механизмы. Развитию остеоартроза способствует постоянная чрезмерная нагрузка или микротравматизация суставов.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 h-full">
                <div className="space-y-5">
                    <h4 className="text-[#6FE6C1] font-bold text-xl uppercase italic">Симптомы:</h4>
                    <ul className="space-y-3 opacity-90 border-l-2 border-[#6FE6C1]/20 pl-6 h-full">
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Боль при нагрузке</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Ограничение подвижности и хруст</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Напряжение мышц</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Деформация сустава</li>
                    </ul>
                </div>
                <div className="space-y-5">
                    <h4 className="text-[#6FE6C1] font-bold text-xl uppercase italic">Эффективность программы:</h4>
                    <ul className="space-y-3 opacity-90 border-l-2 border-[#6FE6C1]/20 pl-6 h-full">
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Нормализует развитие костной ткани</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Улучшает обмен в соединительных тканях</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Способствует регенерации хрящей</li>
                        <li className="flex items-start gap-4"><span className="text-[#6FE6C1]">•</span> Ускоряет сращивание костей</li>
                    </ul>
                </div>
            </div>

            <p className="bg-[#6FE6C1]/5 p-8 border border-[#6FE6C1]/20 rounded-sm italic">Данная программа рекомендуется: при высоких спортивных нагрузках, в период восстановления после переломов и травм суставов, помогает справиться с болями в спине и суставах.</p>
        </div>
    )
  },
  {
    title: "СУЩЕСТВУЕТ МНОЖЕСТВО ПРЕПАРАТОВ, ПОЗВОЛЯУЩИХ ПОВЫШАТЬ ВОЗМОЖНОСТИ ОРГАНИЗМА.",
    theme: "БИОХИМИЯ",
    content: (
        <div className="space-y-8">
            <p>Обсудим один комплексный подход к решению всех выше поставленных задач, основанный на комплексном употреблении продуктов компании. Суть данного комплекса от продукции линейки «СОВЕРШЕНСТВА» заключается в следующем:</p>
            <ul className="space-y-4 border-l-2 border-[#6FE6C1]/20 pl-8 h-full">
                <li className="flex items-start gap-4"><span className="text-[#6FE6C1] text-2xl mt-[-4px]">•</span> Компоненты комплекса позволяют повысить эффективность использования питательных веществ, за счет повышения их усвояемости организмом;</li>
                <li className="flex items-start gap-4"><span className="text-[#6FE6C1] text-2xl mt-[-4px]">•</span> Также продукты комплекса нацелены на повышение эффективности применяемой фармакологии, за счет синергического действия с ней;</li>
                <li className="flex items-start gap-4"><span className="text-[#6FE6C1] text-2xl mt-[-4px]">•</span> Комплекс подстраивается под индивидуальный режим тренировок спортсмена за счет изменения продолжительности и дозировок приема комплекса;</li>
            </ul>
            <p className="mt-8">В комплекс входят следующие продукты: <b>«Сорбент №1»</b>, <b>«Симбиотик №1»</b>, <b>«Поливиитамин №1»</b>.</p>
        </div>
    )
  }
];

const CLIP_QUAD = (size: number) =>
  `polygon(${size}px 0, calc(100% - ${size}px) 0, 100% ${size}px, 100% calc(100% - ${size}px), calc(100% - ${size}px) 100%, ${size}px 100%, 0 calc(100% - ${size}px), 0 ${size}px)`;

export function VitaminsArticlesSection() {
  const [selectedArticle, setSelectedArticle] = useState<number | null>(null);

  useEffect(() => {
    if (selectedArticle !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => { document.body.style.overflow = "unset"; };
  }, [selectedArticle]);

  return (
    <>
      <section id="articles" className="relative overflow-hidden" style={{ backgroundColor: "#001d14", paddingTop: "clamp(80px, 12vw, 140px)", paddingBottom: "clamp(40px, 6vw, 80px)" }}>
        
        {/* ── BACKGROUND BLUEPRINT ANIMATIONS ── */}
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute top-10 right-[-10%] w-[600px] h-[600px] animate-[spin_60s_linear_infinite]">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#6FE6C1]" strokeWidth="0.2">
                <circle cx="100" cy="100" r="90" />
                <circle cx="100" cy="100" r="60" strokeDasharray="2 4" />
                <circle cx="100" cy="100" r="30" />
                <line x1="100" y1="10" x2="100" y2="190" />
                <line x1="10" y1="100" x2="190" y2="100" />
            </svg>
          </div>
          <div className="hidden lg:block absolute bottom-10 left-[-8%] w-[500px] h-[500px] animate-[spin_80s_linear_infinite_reverse] opacity-[0.08]">
            <svg viewBox="0 0 200 200" className="w-full h-full fill-none stroke-[#6FE6C1]" strokeWidth="0.25">
                <circle cx="100" cy="100" r="85" />
                <circle cx="100" cy="100" r="45" strokeDasharray="3 6" />
                <path d="M100 15 L100 0 M100 185 L100 200 M15 100 L0 100 M185 100 L200 100" />
                <circle cx="100" cy="100" r="12" />
            </svg>
          </div>
        </div>

        <Container className="relative z-10">
          {/* ── HEADER ── */}
          <div className="flex flex-col items-start text-left mb-16 md:mb-24 max-w-[1240px] mx-auto">
            <div className="flex items-center gap-5 md:gap-8">
              <div className="w-[3px] md:w-[6px] h-[70px] md:h-[110px] bg-gradient-to-b from-[#6FE6C1] to-[#059669] shadow-[0_0_30px_rgba(111,230,193,0.4)]" />
              <div className="flex flex-col">
                <div className="flex items-center gap-4 mb-3">
                  <span style={{ fontFamily: "'Exo 2', sans-serif", fontSize: "11px", fontWeight: 800, color: "#6FE6C1", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                      МАТЕРИАЛЫ ПО ВИТАМИНАМ
                  </span>
                  <div className="w-[60px] h-[1px] bg-[#6FE6C1]/30 hidden md:block" />
                </div>
                <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(36px, 6vw, 84px)", color: "#fff", textTransform: "uppercase", lineHeight: 0.9, margin: 0 }}>
                  Статьи <span style={{ color: "#00cf8f", textShadow: "0 0 40px rgba(0,207,143,0.3)" }}>по теме</span>
                </h2>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:gap-7 max-w-[1240px] mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
              {articles.slice(0, 2).map((art, idx) => (
                  <ArticleModule key={idx} art={art} size="large" index={idx} onClick={() => setSelectedArticle(idx)} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-7">
              {articles.slice(2, 5).map((art, idx) => (
                  <ArticleModule key={idx} art={art} size="medium" index={idx + 2} onClick={() => setSelectedArticle(idx + 2)} />
              ))}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-7">
              {articles.slice(5, 7).map((art, idx) => (
                  <ArticleModule key={idx} art={art} size="large" index={idx + 5} onClick={() => setSelectedArticle(idx + 5)} />
              ))}
            </div>
          </div>

          {/* ── SOCIAL MEDIA BAR ── */}
          <SocialBar />
        </Container>
      </section>

      {/* ── ARTICLE MODAL RENDERED VIA PORTAL ── */}
      {selectedArticle !== null && typeof document !== "undefined" && createPortal(
        <div 
          className="fixed inset-0 z-[99999] flex items-start justify-center overflow-y-auto"
          style={{ backdropFilter: "blur(20px)", backgroundColor: "rgba(0,10,5,0.95)" }}
          onClick={() => setSelectedArticle(null)}
        >
          <div 
            className="relative w-full max-w-[960px] md:my-12 shadow-[0_0_120px_rgba(111,230,193,0.3)] min-h-screen md:min-h-0"
            style={{ background: "#6FE6C1", clipPath: CLIP_QUAD(42), padding: "2px" }}
            onClick={(e) => e.stopPropagation()}
          >
             <div className="relative w-full h-full flex flex-col min-h-screen md:min-h-0" style={{ background: "#00100a", clipPath: CLIP_QUAD(41) }}>
                {/* STICKY HEADER */}
                <div className="sticky top-0 z-[200] p-6 md:p-10 pb-4 flex justify-between items-start bg-[#00100a]/90 backdrop-blur-xl border-b border-white/10">
                   <div className="flex flex-col gap-2">
                       <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 700, color: "#6FE6C1", letterSpacing: "0.2em", textTransform: "uppercase" }}>
                          МАТЕРИАЛ №{selectedArticle + 1 < 10 ? `0${selectedArticle + 1}` : selectedArticle + 1} // ТЕМА: {articles[selectedArticle].theme}
                       </span>
                       <h2 style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(24px, 3.5vw, 42px)", color: "#fff", lineHeight: 1.15, textTransform: "uppercase" }}>
                          {articles[selectedArticle].title}
                       </h2>
                   </div>
                   <button onClick={() => setSelectedArticle(null)} className="w-14 h-14 bg-white/5 flex items-center justify-center text-white/70 hover:text-[#6FE6C1] hover:bg-white/10 transition-all rounded-full">
                     <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                       <path d="M18 6L6 18M6 6l12 12" />
                     </svg>
                   </button>
                </div>
                <div className="p-8 md:p-16 pt-10 text-[rgba(255,255,255,0.85)] leading-relaxed text-lg" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                   {articles[selectedArticle].content}
                   <div className="mt-16 pt-16 border-t border-white/5 flex flex-col items-center">
                      <button className="site-btn" style={{ fontFamily: "'Furore', sans-serif", fontSize: "14px", color: "#000", textTransform: "uppercase", letterSpacing: "0.2em", padding: "20px 52px", background: "linear-gradient(135deg, #6FE6C1 0%, #059669 100%)", clipPath: CLIP_QUAD(12), border: "none", cursor: "pointer", transition: "all 0.3s ease", boxShadow: "0 0 30px rgba(111,230,193,0.4)" }}>
                          Получить консультацию
                      </button>
                   </div>
                </div>
             </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

function SocialBar() {
  const [isHovered, setIsHovered] = useState(false);
  const CYAN = "#6FE6C1";

  return (
    <div className="mt-10 md:mt-16 flex flex-col items-center w-full px-4 md:px-0">
        <div 
          className="relative w-full max-w-[1240px] h-[180px] md:h-[150px] group transition-all duration-700"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
            {/* Main Body */}
            <div 
              className="absolute inset-0 bg-[#00150f]/95 backdrop-blur-3xl flex flex-col md:flex-row items-center justify-between px-10 md:px-24 gap-8 transition-all duration-700"
              style={{ 
                clipPath: CLIP_QUAD(30),
                transform: isHovered ? "scale(1.02)" : "scale(1)",
                boxShadow: "none"
              }}
            >
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span style={{ fontFamily: "'Furore', sans-serif", fontSize: "clamp(18px, 2.2vw, 24px)", color: CYAN, letterSpacing: "0.4em", textShadow: `0 0 10px ${CYAN}30`, textTransform: "uppercase" }}>
                    ПРИСОЕДИНЯЙТЕСЬ К НАМ
                  </span>
                  <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "clamp(15px, 1.8vw, 19px)", color: "rgba(255,255,255,0.6)", fontWeight: 500, marginTop: "8px" }}>
                    Эксклюзивные экспертные статьи и новости
                  </span>
                </div>

                <div className="flex items-center gap-12 md:gap-20">
                  <SocialLink 
                    href="#" 
                    label="Instagram" 
                    icon={<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>} 
                  />
                  <SocialLink 
                    href="#" 
                    label="YouTube" 
                    icon={<svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.42a2.78 2.78 0 0 0-1.94 2C1 8.11 1 12 1 12s0 3.89.42 5.58a2.78 2.78 0 0 0 1.94 2C5.12 20 12 20 12 20s6.88 0 8.6-.42a2.78 2.78 0 0 0 1.94-2C23 15.89 23 12 23 12s0-3.89-.42-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02"/></svg>} 
                  />
                  <SocialLink 
                    href="#" 
                    label="WhatsApp" 
                    icon={<svg width="34" height="34" viewBox="0 0 448 512" fill="currentColor"><path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-5.5-2.8-23.2-8.5-44.2-27.1-16.4-14.6-27.4-32.7-30.6-38.1-3.2-5.5-.3-8.4 2.4-11.1 2.4-2.4 5.5-6.5 8.3-9.7 2.8-3.3 3.7-5.5 5.5-9.2 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 13.2 5.8 23.5 9.2 31.5 11.8 13.3 4.2 25.4 3.6 34.9 2.2 10.6-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/></svg>} 
                  />
                </div>
            </div>

            {/* FULL CONTOUR SVG BORDER (BASE + CHASER) */}
            <svg 
              className="absolute inset-0 w-full h-full pointer-events-none transition-transform duration-700" 
              viewBox="0 0 1240 150" 
              preserveAspectRatio="none"
              style={{ transform: isHovered ? "scale(1.02)" : "scale(1)" }}
            >
              <defs>
                <linearGradient id="trace-grad-v4" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="transparent" />
                  <stop offset="50%" stopColor={CYAN} />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
              
              {/* STATIC BASE CONTOUR */}
              <path 
                d="M 30 0 L 1210 0 L 1240 30 L 1240 120 L 1210 150 L 30 150 L 0 120 L 0 30 Z"
                fill="none"
                stroke={isHovered ? CYAN + "60" : CYAN + "20"}
                strokeWidth="2"
                className="transition-all duration-700"
              />

              {/* DYNAMIC CHASER */}
              <path 
                d="M 30 0 L 1210 0 L 1240 30 L 1240 120 L 1210 150 L 30 150 L 0 120 L 0 30 Z"
                fill="none"
                stroke="url(#trace-grad-v4)"
                strokeWidth={isHovered ? "3.5" : "0"}
                strokeDasharray="300 2500"
                style={{ 
                    animation: isHovered ? "border-chase-v4 3.5s linear infinite" : "none",
                    opacity: isHovered ? 1 : 0
                }}
              />
            </svg>
        </div>

        <style>{`
          @keyframes border-chase-v4 {
            from { stroke-dashoffset: 2800; }
            to { stroke-dashoffset: 0; }
          }
        `}</style>
    </div>
  );
}

function SocialLink({ href, icon, label }: { href: string, icon: React.ReactNode, label: string }) {
  return (
    <a href={href} className="group relative flex items-center justify-center transition-all duration-400">
      <div className="w-18 h-18 md:w-20 md:h-20 flex items-center justify-center rounded-sm bg-white/5 border border-white/10 group-hover:border-[#6FE6C1]/60 group-hover:bg-[#6FE6C1]/20 transition-all overflow-hidden">
        <div className="transition-transform duration-500 group-hover:scale-125 text-white/40 group-hover:text-[#6FE6C1]">{icon}</div>
      </div>
      <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "11px", fontWeight: 800, letterSpacing: "0.2em", textTransform: "uppercase", position: "absolute", bottom: "-25px", left: "50%", transform: "translateX(-50%)" }} className="opacity-0 group-hover:opacity-100 transition-all text-[#6FE6C1] whitespace-nowrap">{label}</span>
    </a>
  );
}

function ArticleModule({ art, size, index, onClick }: { art: any, size: "large" | "medium", index: number, onClick: () => void }) {
  const isLarge = size === "large";
  return (
    <div onClick={onClick} className="group relative transition-all duration-500 ease-out cursor-pointer hover:-translate-y-2 h-full" style={{ background: "rgba(111,230,193,0.06)", clipPath: CLIP_QUAD(isLarge ? 28 : 22), padding: "1px" }}>
       <div className="absolute inset-0 bg-[#6FE6C1]/10 group-hover:bg-[#6FE6C1]/40 transition-all duration-500 opacity-60" style={{ clipPath: CLIP_QUAD(isLarge ? 28 : 22) }} />
       <div className="relative h-full overflow-hidden flex flex-col justify-between" style={{ background: "linear-gradient(145deg, #00150f 0%, #000805 100%)", clipPath: CLIP_QUAD(isLarge ? 27.5 : 21.5), padding: isLarge ? "clamp(30px, 4vw, 50px)" : "clamp(24px, 3vw, 40px)", minHeight: isLarge ? "clamp(260px, 20vw, 320px)" : "clamp(220px, 15vw, 260px)" }}>
          <div className="flex items-start justify-between mb-8">
             <div className="flex flex-col gap-1">
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 700, color: "#6FE6C1", letterSpacing: "0.15em", opacity: 0.9 }}>МАТЕРИАЛ №{index + 1 < 10 ? `0${index + 1}` : index + 1}</span>
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 500, color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em" }}>ТЕМА: {art.theme}</span>
             </div>
             <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-[#6FE6C1]" />
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "10px", fontWeight: 600, color: "#6FE6C1", letterSpacing: "0.1em" }}>АКТУАЛЬНО</span>
             </div>
          </div>
          <h3 style={{ fontFamily: "'Furore', sans-serif", fontSize: isLarge ? "clamp(20px, 2.5vw, 28px)" : "clamp(16px, 1.8vw, 22px)", color: "#fff", lineHeight: 1.25, textTransform: "uppercase", margin: 0 }} className="group-hover:text-[#6FE1C1] transition-colors duration-300">{art.title}</h3>
          <div className="mt-8 flex items-center gap-3 md:gap-5 overflow-hidden">
             <div className="h-[1px] flex-1 bg-gradient-to-r from-[#6FE6C1]/40 to-transparent" />
             <div className="flex items-center gap-2 group-hover:scale-110 transition-transform duration-300">
                <span style={{ fontFamily: "'Raleway', sans-serif", fontSize: "9px", color: "#6FE6C1", textTransform: "uppercase", letterSpacing: "0.2em" }}>ЧИТАТЬ</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6FE6C1" strokeWidth="2.5"><path d="M7 17L17 7M17 7H7M17 7V17" /></svg>
             </div>
          </div>
       </div>
    </div>
  );
}
