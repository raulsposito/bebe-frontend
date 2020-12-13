import React from 'react';

const Bebes = (props) => {

  function bebeCard(bebe) {
    return (
      <div key={bebe.id} className="card">
        <h3>{bebe.attributes.name}</h3>
        <p className="align-left">
          Kind: {bebe.attributes.kind} <br/>
          Birthdate: {bebe.attributes.birthdate} <br/>
          Bio: {bebe.attributes.bio}</p>
      </div>
    )
  }

  return (
    <div className="dashboard">
      {props.bebes.map(bebe => bebeCard(bebe))}
    </div>
  )

}

export default Bebes
