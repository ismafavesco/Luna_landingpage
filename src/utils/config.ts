import type { TemplateConfig } from "./configType";

const templateConfig: TemplateConfig = {
  name: "Luna",
  seo: {
    title: "Luna — Conexiones escritas en las estrellas",
    description:
      "App de citas y conexiones basada en astrología y numerología. Encuentra personas realmente compatibles contigo.",
  },
  backgroundGrid: false,
  logo: "/logos/Luna_LogoMark.png",
  theme: "luna",
  forceTheme: true,
  showThemeSwitch: false,
  appStoreLink: "",
  googlePlayLink: "",
  footer: {
    legalLinks: {
      termsAndConditions: true,
      cookiesPolicy: true,
      privacyPolicy: true,
    },
    socials: {
      instagram: "https://instagram.com/lunaconecta",
      facebook: "https://facebook.com/lunaconecta",
      twitter: "https://x.com/lunaconecta",
    },
    links: [
      { href: "/#features", title: "Qué ofrece" },
      { href: "/#how-it-works", title: "Cómo funciona" },
      { href: "/#pricing", title: "Planes" },
      { href: "/#faq", title: "Preguntas" },
    ],
  },
  topNavbar: {
    cta: "Únete a la lista",
    disableWidthAnimation: false,
    hideAppStore: false,
    hideGooglePlay: false,
    links: [
      { href: "/#features", title: "Qué ofrece" },
      { href: "/#how-it-works", title: "Cómo funciona" },
      { href: "/#pricing", title: "Planes" },
      { href: "/#faq", title: "Preguntas" },
    ],
  },
  appBanner: {
    id: "app-banner",
    title: "Tu próxima conexión está escrita en las estrellas",
    subtitle:
      "Luna calcula tu carta natal y tu perfil numerológico para conectarte con personas realmente compatibles contigo. Muy pronto en iOS y Android.",
    screenshots: [
      "/screenshots/1.jpg",
      "/screenshots/2.jpg",
      "/screenshots/3.jpg",
    ],
  },
  home: {
    seo: {
      title: "Luna — Citas y conexiones por compatibilidad astrológica",
      description:
        "Conoce personas compatibles contigo según tu carta natal y numerología. Conexiones reales, no swipes al azar.",
    },
    header: {
      headline: "Conexiones escritas en las estrellas",
      subtitle:
        "Luna usa tu carta natal y tu perfil numerológico para mostrarte solo personas realmente compatibles contigo. Menos swipes al azar, más conexiones que valen la pena.",
      screenshots: [
        "/screenshots/1.jpg",
        "/screenshots/2.jpg",
        "/screenshots/3.jpg",
      ],
      rewards: ["Compatibilidad \nreal, no al azar", "Carta natal \nincluida"],
      usersDescription: "Muy pronto en iOS y Android",
      headlineMark: [1, 4],
    },
    features: {
      id: "features",
      title: "Por qué Luna es diferente",
      subtitle: "No es otra app de swipes. Es compatibilidad de verdad.",
      cards: [
        {
          title: "Compatibilidad real",
          subtitle:
            "Un algoritmo que cruza tu carta natal y tu numerología para calcular qué tan compatible eres con cada persona",
          icon: "/icons/compatibilidad.svg",
        },
        {
          title: "Tu carta natal",
          subtitle:
            "Descubre tu sol, luna, ascendente y tu número de vida. Conócete mejor mientras conoces a alguien más",
          icon: "/icons/carta-natal.svg",
        },
        {
          title: "Lectura mensual",
          subtitle:
            "Cada mes recibes una lectura astrológica personalizada según tu carta natal",
          icon: "/icons/lectura-mensual.svg",
        },
        {
          title: "Mensajes diarios",
          subtitle:
            "Un mensaje motivacional cada día, pensado para tu signo y tu momento",
          icon: "/icons/mensajes-diarios.svg",
        },
      ],
    },
    howItWorks: {
      id: "how-it-works",
      title: "Cómo funciona",
      subtitle: "Cuatro pasos para encontrar a alguien que vibre contigo",
      steps: [
        {
          title: "Crea tu perfil",
          subtitle:
            "Ingresa tu fecha, hora y lugar de nacimiento. Con eso calculamos tu carta natal y tu perfil numerológico.",
          image: "/stock/01.webp",
        },
        {
          title: "Descubre tu perfil cósmico",
          subtitle:
            "Conoce tu signo solar, lunar, ascendente y tu número de vida. Tu carta natal completa, en segundos.",
          image: "/stock/03.webp",
        },
        {
          title: "Explora perfiles compatibles",
          subtitle:
            "Solo te mostramos personas con alta compatibilidad. Tú decides tu porcentaje mínimo aceptable.",
          image: "/stock/04.webp",
        },
        {
          title: "Conecta y conversa",
          subtitle:
            "Cuando hay match, se abre el chat. Con el desglose de por qué ustedes dos conectan.",
          image: "/stock/07.jpg",
        },
      ],
    },
    testimonials: {
      id: "testimonials",
      title: "Qué mide Luna",
      subtitle: "Cinco factores que van más allá de una foto",
      cards: [
        {
          name: "Compatibilidad emocional",
          comment:
            "Sus lunas hablan de cómo sienten y se cuidan. Luna compara ese lado emocional entre ustedes dos.",
        },
        {
          name: "Compatibilidad romántica",
          comment:
            "Venus marca cómo amas y qué buscas en pareja. Es una de las claves de la compatibilidad.",
        },
        {
          name: "Comunicación",
          comment:
            "Mercurio define cómo te expresas. Saber si se entienden fácil lo cambia todo.",
        },
        {
          name: "Pasión",
          comment:
            "Marte habla de energía y deseo. Un factor más que Luna toma en cuenta al calcular su match.",
        },
        {
          name: "Numerología",
          comment:
            "Tu número de vida revela tu camino. Luna busca números que se complementen con el tuyo.",
        },
      ],
    },
    faq: {
      id: "faq",
      title: "Preguntas frecuentes",
      qa: [
        {
          question: "¿Cómo calcula Luna la compatibilidad?",
          answer:
            "Luna analiza tu carta natal completa (sol, luna, ascendente y posiciones planetarias) junto con tu perfil numerológico. Con esos datos calcula un porcentaje de compatibilidad desglosado en cuatro áreas: emocional, romántica, comunicación y pasión.",
        },
        {
          question: "¿Necesito saber mi hora de nacimiento?",
          answer:
            "Es muy recomendable. La hora de nacimiento permite calcular tu ascendente y las casas astrológicas, que hacen la lectura mucho más precisa. Si no la sabes con exactitud, puedes darnos un rango aproximado.",
        },
        {
          question: "¿Luna es solo para relaciones románticas?",
          answer:
            "No. Aunque muchas personas la usan para encontrar pareja, en tu perfil puedes indicar qué buscas: una relación seria, algo casual, amistad o simplemente explorar y conocer gente afín.",
        },
        {
          question: "¿Puedo filtrar a las personas que veo?",
          answer:
            "Sí. Puedes filtrar por edad, distancia y género u orientación. El resto lo maneja el algoritmo, justamente para mostrarte personas compatibles que quizá no habrías elegido por tu cuenta.",
        },
        {
          question: "¿Cuánto cuesta usar Luna?",
          answer:
            "Luna es gratis. Puedes crear tu perfil, ver tu carta natal, explorar personas compatibles y chatear sin pagar nada. Más adelante habrá funciones premium opcionales, pero lo esencial siempre será gratuito.",
        },
        {
          question: "¿Mis datos están seguros?",
          answer:
            "Sí. Tu fecha, hora y lugar de nacimiento se usan únicamente para calcular tu carta natal y tu compatibilidad. Nunca compartimos tu información con terceros y tú decides qué se muestra en tu perfil.",
        },
        {
          question: "¿Cuándo estará disponible?",
          answer:
            "Estamos por lanzar en México, y después llegaremos a Estados Unidos. Déjanos tu correo y te avisamos en cuanto Luna esté disponible para descargar.",
        },
      ],
    },
    pricing: {
      id: "pricing",
      title: "Empieza gratis",
      subtitle:
        "Luna es gratis desde el día uno. Las funciones premium llegarán después, y siempre serán opcionales.",
      actionText: "Únete a la lista",
      plans: [
        {
          title: "Gratis",
          price: "$0",
          featured: true,
          rows: [
            "Tu carta natal completa",
            "Compatibilidad con cada perfil",
            "Swipes ilimitados",
            "Chat con tus matches",
            "Mensaje motivacional diario",
          ],
        },
        {
          title: "Premium",
          price: "Muy pronto",
          rows: [
            "Todo lo del plan gratis",
            "Lectura mensual personalizada",
            "Carta natal a detalle",
            "Filtros avanzados",
          ],
        },
      ],
    },
  },

  privacyPolicy: {
    seo: {
      title: "Aviso de Privacidad — Luna",
      description: "Aviso de Privacidad de la aplicación Luna",
    },
    content: `# Aviso de Privacidad

**Última actualización:** agosto de 2026

## Introducción

En Luna ("la App", "nosotros") tu privacidad es fundamental. Este Aviso de Privacidad explica qué información recopilamos, cómo la usamos, cómo la protegemos y cuáles son tus derechos.

## Información que recopilamos

### Información que tú nos proporcionas

**Datos de cuenta**
- Nombre
- Correo electrónico
- Contraseña (cifrada)

**Datos de nacimiento**

Estos datos son necesarios para calcular tu carta natal y tu perfil numerológico:
- Fecha de nacimiento
- Hora de nacimiento (o rango aproximado)
- Lugar de nacimiento

**Datos de perfil**
- Fotografías
- Descripción personal
- Estilo de vida y preferencias
- Género y qué tipo de conexión buscas

**Comunicaciones**
- Mensajes enviados dentro de la app
- Reportes y solicitudes de soporte

### Información que recopilamos automáticamente
- Datos de uso de la aplicación
- Tipo de dispositivo y sistema operativo
- Ubicación aproximada, para mostrarte personas cercanas

## Cómo usamos tu información

Utilizamos tus datos para:
- Calcular tu carta natal y tu perfil numerológico
- Determinar tu compatibilidad con otras personas
- Mostrarte perfiles relevantes
- Enviarte tu lectura mensual y tus mensajes diarios
- Mantener la seguridad de la comunidad
- Mejorar la aplicación

Nunca vendemos tu información personal a terceros.

## Tus derechos

Conforme a la Ley Federal de Protección de Datos Personales en Posesión de los Particulares, tienes derecho a:
- **Acceder** a los datos que tenemos sobre ti
- **Rectificar** la información incorrecta
- **Cancelar** tu cuenta y solicitar la eliminación de tus datos
- **Oponerte** al tratamiento de tus datos para fines específicos

Para ejercer cualquiera de estos derechos, escríbenos y atenderemos tu solicitud.

## Seguridad

Protegemos tu información con medidas técnicas y organizativas razonables. Tus datos se almacenan de forma cifrada y el acceso está restringido.

## Menores de edad

Luna es exclusivamente para personas mayores de 18 años. No recopilamos intencionalmente información de menores.

## Cambios a este aviso

Podemos actualizar este Aviso de Privacidad. Te notificaremos dentro de la app cuando haya cambios importantes.

## Contacto

Para cualquier duda sobre privacidad, escríbenos a soporte@luna-conecta.com
`,
  },

  termsAndConditions: {
    seo: {
      title: "Términos y Condiciones — Luna",
      description: "Términos y Condiciones de uso de la aplicación Luna",
    },
    content: `# Términos y Condiciones

**Última actualización:** agosto de 2026

## Aceptación

Al crear una cuenta y usar Luna, aceptas estos Términos y Condiciones. Si no estás de acuerdo, por favor no utilices la aplicación.

## Quién puede usar Luna

Para usar Luna debes:
- Tener al menos 18 años cumplidos
- Proporcionar información verdadera
- No haber sido suspendido previamente de la plataforma
- Usar una sola cuenta personal

## Tu cuenta

Eres responsable de:
- Mantener la seguridad de tu contraseña
- La actividad que ocurra en tu cuenta
- La veracidad de la información de tu perfil
- Notificarnos si detectas un uso no autorizado

## Uso aceptable

Al usar Luna te comprometes a no:
- Suplantar la identidad de otra persona
- Acosar, amenazar o intimidar a otros usuarios
- Publicar contenido ofensivo, sexual explícito o ilegal
- Usar la app con fines comerciales o publicitarios
- Extraer datos de otros usuarios
- Intentar vulnerar la seguridad de la plataforma

## Contenido

El contenido que publicas sigue siendo tuyo, pero nos otorgas una licencia para mostrarlo dentro de la aplicación como parte del servicio.

Podemos retirar contenido que incumpla estos términos, sin previo aviso.

## Naturaleza del servicio

Luna ofrece información astrológica y numerológica con fines de entretenimiento y autoconocimiento. Los porcentajes de compatibilidad son sugerencias basadas en estos sistemas y no constituyen asesoría profesional de ningún tipo. Las decisiones que tomes sobre con quién relacionarte son totalmente tuyas.

## Seguridad al conocer personas

Luna no realiza verificación de antecedentes de sus usuarios. Te recomendamos:
- Conocer a las personas en lugares públicos
- Avisar a alguien de confianza sobre tus planes
- No compartir información financiera
- Reportar cualquier comportamiento sospechoso

## Suspensión de cuentas

Podemos suspender o eliminar cuentas que:
- Incumplan estos términos
- Realicen actividades prohibidas
- Proporcionen información falsa
- Pongan en riesgo a la comunidad

## Limitación de responsabilidad

Luna se ofrece "tal cual". No garantizamos que encontrarás una pareja o conexión, ni nos hacemos responsables por las interacciones entre usuarios fuera de la aplicación.

## Cambios

Podemos actualizar estos términos. Te avisaremos dentro de la app cuando haya modificaciones relevantes.

## Contacto

Para dudas o reportes, escríbenos a soporte@luna-conecta.com
`,
  },

  cookiesPolicy: {
    seo: {
      title: "Política de Cookies — Luna",
      description: "Política de Cookies del sitio web de Luna",
    },
    content: `# Política de Cookies

**Última actualización:** agosto de 2026

## Qué son las cookies

Las cookies son pequeños archivos de texto que se guardan en tu dispositivo cuando visitas un sitio web. Sirven para que el sitio funcione correctamente y para entender cómo se usa.

## Cookies que utilizamos

### Cookies necesarias

Permiten el funcionamiento básico del sitio, como recordar tus preferencias de visualización. Sin ellas el sitio no funciona bien.

### Cookies de análisis

Nos ayudan a entender cómo llegan y navegan las personas en nuestro sitio, para poder mejorarlo. Los datos se manejan de forma agregada y anónima.

## Cómo controlar las cookies

Puedes configurar tu navegador para bloquear o eliminar cookies en cualquier momento. Ten en cuenta que algunas funciones del sitio podrían dejar de funcionar correctamente.

Cada navegador tiene su propia configuración:
- **Chrome:** Configuración → Privacidad y seguridad → Cookies
- **Safari:** Preferencias → Privacidad
- **Firefox:** Ajustes → Privacidad y seguridad

## Cambios

Podemos actualizar esta política. La fecha de la última actualización siempre aparecerá al inicio de esta página.

## Contacto

Para cualquier duda, escríbenos a soporte@luna-conecta.com
`,
  },
};

export default templateConfig;
