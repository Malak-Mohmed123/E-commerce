import { IoLogoGithub } from "react-icons/io";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="w-full bg-[#F1F1F1] h-[100]">
    <div className="row mx-auto flex-col justify-center items-center">
      <span className="text-5xl my-3">404</span>
      <span className="text-gray-800 my-3">File not found</span>
      <p className="text-gray-500 my-3">The site configured at this address does not contain the requested file.</p>
      <div className="text-gray-500 my-3">If this is your site, make sure that the filename case matches the URL as well as any file permissions.</div>
<div className="text-gray-500 my-3">For root URLs (like http://example.com/) you must provide an index.html file.</div>
<div className="row flex-row my-3">
<Link className="text-blue-500 mx-1 hover:underline hover:text-blue-500" to={'https://docs.github.com/en/pages'}>Read the full documentation</Link>
<p className="text-gray-500">for more information about using </p>
<span className="text-gray-800 text-md mx-1">GitHub Pages</span>
</div>
<div className="my-3 row flex-row ">
<Link to={'https://www.githubstatus.com/'} className="mr-3 text-gray-500 text-sm hover:underline hover:text-gray-500"> GitHub Status</Link>
 <Link to={'https://x.com/githubstatus?mx=2'} className="ml-3 text-gray-500 text-sm hover:underline hover:text-gray-500">@githubstatus </Link>
</div>
<Link to={'https://routeegy.github.io/'} className="text-gray-300 hover:text-gray-300 text-4xl"><IoLogoGithub /></Link>


    </div>
    </div>
  )
}
