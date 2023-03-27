
export default function VendorPage({ children, className='', ...props })
{
  return (
    <div className={`${className} fixed inset-0 overflow-y-auto z-10 lg:relative lg:z-0`} {...props}>{children}</div>
  )
}