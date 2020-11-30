import React, { useState } from "react";
import axios from "axios";

const CreateLink = () => {

  const [ link, setLink ] = useState('');
  const [ desc, setDesc ] = useState('');
  const [ difficulty, setDifficulty ] = useState(1);
  const [ judge, setJudge ] = useState('Codeforces');
  const [ owner, setOwner ] = useState('');
  const [ tags, setTags ] = useState('');
  const [ saved, setSaved ] = useState(false);

  const saveNewLink = async (e) => {
    e.preventDefault();
    const linkData = { link, desc, difficulty, judge, owner, tags: tags.split(',') };
    await axios.post('/links', linkData);
    setLink('');
    setDesc('');
    setDifficulty(1);
    setJudge('Codeforces');
    setOwner('');
    setTags('');
    setSaved(true);
    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <div className="flex justify-center pt2">
      <form className="pa4 black-80 w-40 cultured measure" onSubmit={saveNewLink}>
        <label 
          htmlFor="link" 
          className="f6 b db mb2"
        > Link </label>
        <input
          id="link"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          value={link}
          onChange={e => setLink(e.target.value)}
        />

        <label 
          htmlFor="link" 
          className="f6 b db mb2"
        > Desc </label>
        <input
          id="link"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          value={desc}
          onChange={e => setDesc(e.target.value)}
        />

        <label 
          htmlFor="difficulty" 
          className="f6 b db mb2 mt2"
        > Difficulty </label>
        <input 
          id="difficulty"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="number"
          min="1"
          max="10"
          value={difficulty}
          onChange={e => setDifficulty(e.target.value)}
        />
        
        <label
          htmlFor="judge"
          className="f6 b db mb2 mt2"
        >Judge</label>
        <select value={judge} onChange={e => setJudge(e.target.value)}>
          <option value="Codeforces"> Codeforces </option>
          <option value="AtCoder"> AtCoder </option>
        </select>
        
        <label
          htmlFor="owner"
          className="f6 b db mb2 mt2"
        >Owner</label>
        <input 
          id="owner"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          value={owner}
          onChange={e => setOwner(e.target.value)}
        />
        
        <label
          htmlFor="tags"
          className="f6 b db mb2 mt2"
        >Tags</label>
        <input
          id="tags"
          className="input-reset ba b--black-20 pa2 mb2 db w-100"
          type="text"
          aria-describedby="name-desc"
          value={tags}
          onChange={e => setTags(e.target.value)}
        />

        <input
          className="b ph3 pv2 mt2 input-reset ba b--black bg-near-white grow raisin-black pointer f6 dib"
          type="submit"
          value="Create"
        />

        { saved && <p className="green"> Salvo com sucesso.</p> }
      </form>
    </div>
  );
};

export default CreateLink;