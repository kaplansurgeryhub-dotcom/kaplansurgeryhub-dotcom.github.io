// האקדמיה · עולם הסטודנטים
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
  chips: ['מצגות הסבב', 'סילבוס', 'משמרות ערב', 'פתיחת סבב'],
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
      ] },
    { id: 'syllabus', t: 'סילבוס הסבב', en: 'SYLLABUS', icon: 'book', ill: 'sa', c: '#4A8FD0',
      desc: 'מה לומדים בכל שבוע, לפי Sabiston',
      groups: [
        { t: 'הסילבוס לפי שבועות', desc: 'הנושאים, הפרקים והמטרות של כל שבוע', icon: 'sa', items: [] }
      ] },
    { id: 'evening', t: 'משמרות ערב', en: 'EVENING SHIFTS', icon: 'steth', ill: 'mm', c: '#3AA0C8',
      desc: 'המשמרת במיון ובמחלקה: מה עושים ומה לומדים',
      groups: [
        { t: 'מדריך למשמרת', desc: 'לוח הזמנים, התפקיד ומה מצופה', icon: 'cl', items: [] }
      ] }
  ]
});
