import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAnalytics } from 'firebase/analytics'

const firebaseConfig = {
  apiKey: 'AIzaSyCTYL07G0YVtmtl3qrAvfdqqSo-UBtsBJk',
  authDomain: 'izivagas.firebaseapp.com',
  projectId: 'izivagas',
  storageBucket: 'izivagas.appspot.com',
  messagingSenderId: '804219221531',
  appId: '1:804219221531:web:7571bd7ed8a6b908d06abe',
  measurementId: 'G-17H4TJ76HP'
}

let analytics
let firestore
if (firebaseConfig?.projectId) {
  const app = initializeApp(firebaseConfig)

  if (app.name && typeof window !== 'undefined') {
    analytics = getAnalytics(app)
  }
  firestore = getFirestore()
}

export { analytics, firestore }
