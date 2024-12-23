import '@/styles/components/controlPanel/ControlPanelLayout.css'

export default function ControlPanelLayout({ children }) {

  return (
    <div className='control-panel-layout'>
        <div>{children}</div>
    </div>
  )
}
