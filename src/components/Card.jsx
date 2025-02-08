import styles from './Card.module.css'

const Card = ({ imageUrl, altText, paragraphText, removeBorders = [] }) => {

  const borderStyles = {
    borderTop: removeBorders.includes('top') ? 'none' : '3px solid var(--color-accent)',
    borderRight: removeBorders.includes('right') ? 'none' : '3px solid var(--color-accent)',
    borderBottom: removeBorders.includes('bottom') ? 'none' : '3px solid var(--color-accent)',
    borderLeft: removeBorders.includes('left') ? 'none' : '3px solid var(--color-accent)',
    
    borderRadius:
    `${removeBorders.includes('top') || removeBorders.includes('left') ? '0' : '8px'} 
    ${removeBorders.includes('top') || removeBorders.includes('right') ? '0' : '8px'} 
    ${removeBorders.includes('bottom') || removeBorders.includes('right') ? '0' : '8px'} 
    ${removeBorders.includes('bottom') || removeBorders.includes('left') ? '0' : '8px'}`,
    
    marginLeft: removeBorders.includes('left') ? '0' : '2.5rem',
    marginRight: removeBorders.includes('right') ? '0' : '2.5rem',
  };

  return (
    <div>
      <article className={styles.card} style={borderStyles}>
        <div className={styles.cardImageContainer}>
          <img src={imageUrl} alt={altText} className={styles.cardImage} />
          <p className={styles.cardText}>{paragraphText}</p>
        </div>
      </article>
    </div>
  )
}

export default Card