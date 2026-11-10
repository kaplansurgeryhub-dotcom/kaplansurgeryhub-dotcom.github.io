// חדר הלימודים · עולם הסטודנטים
// קובץ התוכן של עולם הסטודנטים. מוסיפים פריט לרשימה items של המדור, בלי לגעת בקוד הדף.
// סוגי פריטים:
//   { deck: 'shock.html' }                         מצגת Scrub In (הכותרת נלקחת מהמצגת)
//   { id, t, type: 'pdf',  src: 'students/x.pdf', pages: 20 }   PDF, נפתח בצפייה על כל המסך
//   { id, t, type: 'page', src: '../academy/x.html' }          דף HTML, נפתח על כל המסך
//   { id, t, type: 'link', href: '#i/onboard' }                קישור לאזור אחר באולם
// שדות רשות: sub (שורת משנה), kind (תווית), icon (איור), c (צבע), no (מספר)
LH.audience({
  key: 's', order: 4,
  t: 'עולם הסטודנטים', en: 'STUDENTS · SCRUB IN', icon: 'cap', art: 'gi',
  desc: 'סבב הכירורגיה של שנה ד׳ מקצה לקצה: מהיום הראשון ועד הבחינה',
  chips: ['מצגות הסבב', 'פתיחת סבב'],
  note: 'הלו״ז, הסילבוס, משמרות הערב והדיווח היומי נמצאים באפליקציה האישית של כל סטודנט/ית.',
  sections: [
    { id: 'decks', type: 'decks', t: 'מצגות הסבב', en: 'SCRUB IN', icon: 'slides', ill: 'up', c: '#00967D',
      desc: 'כל ההרצאות, דיוני המקרים והסדנאות של ששת השבועות: לפי סדר הסבב, לפי תחום ולפי נושא' },
    { id: 'intro', t: 'פתיחת סבב והכרת המערך', en: 'ORIENTATION', icon: 'hosp', ill: 'hosp', c: '#13A386',
      desc: 'היום הראשון בסבב: המבוא, חדר הניתוח, קבלת חולים והצגת מטופל',
      items: [
        { deck: 'orientation.html' },
        { deck: 'operating-room.html' },
        { deck: 'admission.html' },
        { deck: 'case-presentation.html' }
      ] }
  ]
});
