import Image from "next/image";
import workImg1 from './assets/images/work-img1.jpg'
import SplitLandingPage from "./components/SplitLandingPage";

// Updated to a split landing page. Deciding what to do with the Mission statement page at the moment

export default function Home() {
  return (
    // <main className="mt-16 p-12 flex w-full bg-gray-200">
    //     {/* hardcoded string because this content will not change. Use props if we must reuse components */}
    //     <section className="w-1/2 ">
    //         <h1 className="text-4xl">Who We Are</h1>
    //         <h2 className="text-2xl">Mission Statement</h2>
    //         <p>
    //         Lorem ipsum odor amet, consectetuer adipiscing elit. Neque felis dignissim erat penatibus hendrerit hendrerit tincidunt. Morbi ornare magnis; scelerisque tellus mauris convallis suscipit. Natoque convallis dolor ligula at maximus eget placerat. Metus vel dapibus amet quisque vivamus? Nunc class donec integer tempus quis habitant consectetur bibendum id. Litora habitasse varius ornare quam ac. Finibus congue dolor fames, rhoncus facilisis nascetur porta purus mi.
    //         </p>
    //         <p>
    //         Amattis viverra gravida; condimentum mattis nascetur. Fusce magnis nunc taciti posuere morbi. Potenti tortor dapibus natoque aliquam condimentum lacus maximus. Eros venenatis ante molestie pharetra urna rutrum. Proin dis etiam risus, pharetra lectus sem. Purus per eu proin sapien lacus lacinia laoreet sem. Odio magna cubilia vulputate consectetur facilisi accumsan.
    //         </p>
    //     </section>
    //     <section className="w-1/2">
    //         <img src="./assets/images/work-img1.jpg" className="rounded" alt="Description of Image" />
    //     </section>
    // </main>
    <SplitLandingPage />
  );
}
