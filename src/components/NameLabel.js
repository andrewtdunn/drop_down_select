import Label from 'react-icons/lib/md/label'

export const NameLabel = ({name, hexColor}) => {

  return (
    <span>
      <span style={{color: hexColor }}><Label/> </span>
      {name}
    </span>
  )
}
