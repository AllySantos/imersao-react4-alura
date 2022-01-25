
import appConfig from '../../config.json'

export function Title(props){

  const Tag = props.tag || 'h1';

  return(
    <>
      <Tag>{props.children}</Tag>

      <style jsx>{`
      
        ${Tag} {
          color: ${appConfig.theme.colors.neutrals['000']};
          font-size: 2rem;
          font-weight:600; 
        }
      `}</style>
    </>
    
    )
}