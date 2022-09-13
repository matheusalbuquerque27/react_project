import styles from './name.module.css'; 

function Name({name, surname}){
   
    return (
        
        <p className={styles.background}>O nome da pessoa é: {name + surname}</p>
    )

}

export default Name