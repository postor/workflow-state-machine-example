import Nav from './Nav'
export default (Comp)=>()=>(<div>
  <header>
    header
  </header>
  <Nav />
  <main>
    <Comp />
  </main>
  <footer>
    footer
  </footer>
</div>)