import logo from './assets/Logo.svg'
import { NewNoteCard } from './componetes/new-note-card'
import { NoteCard } from './componetes/note-card'

const note = {
  date: new Date(),
  content: "Hello world"
}

export function App() {
 return (
  <div className='mx-auto max-w-6xl my-12 space-y-6'>
    <img src={logo} alt='NLW Expert' />

    <form className='w-full '>
      <input 
        type="text" 
        placeholder='Busque a suas notas...'
        className='w-full bg-transparent text-3xl font-semibold outline-none tracking-tight placeholder:text-slate-500'
        />
    </form>

    <div className='h-px bg-slate-700'/>
    
    <div className='grid grid-cols-3 gap-6 auto-rows-[250px]'>
      <NewNoteCard/>
      
      {/* <NoteCard 
      date={new Date()}
      content='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic, assumenda esse exercitationem voluptate deleniti a praesentium ullam illo rem, eaque, sunt quis sint cupiditate et at. Eum rerum quibusdam illo.'
      />  */}

      <NoteCard note={note}/>   
    </div>
  </div>
 )
}