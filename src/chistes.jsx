/* eslint-disable react/prop-types */
export default function Chistes(props) {
    console.log(props);
    const { chistes } = props;
    console.log(chistes);
    return (
        <>
          <div className="listaChistes">
            <h1>
                Chistes Ramdom
            </h1>
            <div className="oneChiste">
            {chistes.map((chistes, index) => (
                    <div className="chiste" key= {index}>
                        <p>{chistes.id} <b>{chistes.joke}</b></p>
                    </div>
                ))}
            </div>
          </div>
        </>
      )
}