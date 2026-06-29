type AssetsProps = {
    id: string;
};

export default function Assets({ id }: AssetsProps) {
    return (
        <>
            <p className="p-5">{id}</p>
        </>
    );
}

// type propsType={
//     id:string;
// }

// const Assets=(props:propsType)=> {
//     console.log('Assets' + props.id);
//     return (
//         <div>ID={props.id}</div>
//     )
// }

// export default Assets

// export default function Assets() {
//   return (
//             <div className="container mx-auto">
//                 <p>© 2026 MyBookShelf</p>
//             </div>
//   )
// }