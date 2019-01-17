import Link from 'next/link'

const style = {
  margin: '0 15px'
}

export default () => (<nav>
  <Link href="/">
    <a style={style}>首页</a>
  </Link>
  <Link href="/toilet">
    <a style={style}>感应马桶</a>
  </Link>
  <Link href="/tasklist">
    <a style={style}>任务状态</a>
  </Link>

</nav>)