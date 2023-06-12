// Write your code here
const TabItem = props => {
  const {tabDetails, onUpdate, isActive} = props
  const {tabId, displayText} = tabDetails
  const className = isActive ? 'Active' : 'UnActive'
  const onChange = () => {
    onUpdate(tabId)
  }
  return (
    <li>
      <button type="button" onClick={onChange} className={className}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
