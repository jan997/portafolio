import React from 'react';
// import './App.css';

function Lore({className, small=false}:{className:string, small?:boolean}) {
    return <article className={`card  h-100 shadow ${className}`}>
      <div className="card-body">
        <div className="d-flex mb-3">
          <img src="https://twt-thumbs.washtimes.com/media/image/2020/03/16/Virus_Outbreak-Idris_Elba_85261.jpg-801f0_c0-151-3696-2305_s885x516.jpg?068b24bd9a433076c4ee308e9cb73698fbc9b0e8" className="border border-secondary border-3 rounded-circle"/>
          <div className="ps-3">
            <h3 className="m-0 h6 text-bold">Daniel Clifford</h3>
            <p className="m-0 h6 text-gray">Lorem, ipsum</p>
          </div>
        </div>
        <div>
            <p className="h6 ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque error quis dolore, quia vitae similique ratione rem, porro laboriosam at voluptatum illum necessitatibus inventore veniam sint ad, a quod.</p>
          {small?null:
            <p className="fs-6 Lg-1 text-gray">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem itaque error quis dolore, quia vitae similique ratione rem, porro laboriosam at voluptatum illum necessitatibus inventore veniam sint ad, a quod.</p> 
          }
        </div>
      </div>
    </article>;
}

function App() {
  return (
    <main className="container d-flex align-items-center justify-content-center altura-100">
      <div className="row ">
        <div className="col-12 col-lg-9">
          <div className="row">
            <div className="col-12 col-lg-8 p-2"><Lore className={"bg-success text-white"} /></div>
            <div className="col-12 col-lg-4 p-2"><Lore className={"bg-primary text-white"} small={true}/></div>
          </div>
          <div className="row">
            <div className="col-12 col-lg-4 p-2"><Lore className={"bg-danger text-white"} small={true}/></div>
            <div className="col-12 col-lg-8 p-2"><Lore className={"bg-dark text-white"}/></div>
          </div>
        </div>
        <div className="col-12 col-lg-3 p-2">
        <Lore className={"bg-danger text-white"}/>
        </div>
      </div>
    </main>
  );
}

export default App;
