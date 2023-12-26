import Navbar from './Navbar'
import Card from './Card'
import Footer from './Footer'
import DataSet from './Dataset'
export default function App() {
  const Cards = DataSet.map(item => {

    return (
      <Card
        key={item.id}
        {...item}
      />
    )
  })
  return (
    <div className="App">
      <Navbar />
      <section className="cards-list">
        {Cards}
      </section>
      <Footer />
    </div>
  )
}

/*

        id: 2,
        title: "Sydney Opera House",
        location: "Australia",
        body: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
        img: 'https://source.unsplash.com/JmuyB_LibRo',
        date: "27 May, 2021 - 8 Jun, 2021",
import DataSet from './data'
function App() {
  const Cards = DataSet.map(item => {
    return (
      <Card
        key={item.id}
        {...item} 
      />
    )
  })
  */