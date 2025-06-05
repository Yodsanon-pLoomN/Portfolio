import React from "react";
import Image from "next/image";
export default async function Page({params}: {params: Promise<{ id: string }>}) {
  const { id } = await params;
  return (
    <div className="bg-[#1B1B1B] min-h-screen container mx-auto pt-1 mt-3">
        <div  className="flex flex-wrap gap-20 m-10 justify-center ">
            <h1 className="justify-self-center text-white  lg:justify-self-start text-xl ">Work {id}</h1>
        </div>


    
    <div className="flex flex-wrap gap-20 m-10 justify-center">
        <Image
          src="/assets/1.png"
          alt="Profile picture"
          height={400}
          width={400}
        />
    

    </div>

      <div className="flex flex-wrap gap-20 m-10 justify-center">
        <div className="justify-items-center lg:justify-items-start mt-10 ">
          <p className="justify-self-center text-white m-10  lg:justify-self-start">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer eget nisi sapien. Vestibulum ullamcorper eu orci in vulputate. In leo sapien, convallis at erat et, mattis accumsan mi. Nam a magna commodo, suscipit risus a, lobortis nulla. Quisque vulputate nisi sit amet metus volutpat, ornare ultrices sapien elementum. Vestibulum in sem vel leo varius vulputate nec eu ex. Quisque iaculis lobortis lorem, sed porttitor nibh lacinia id. Proin risus mauris, commodo in accumsan eu, iaculis eu urna. Ut gravida, erat at eleifend vestibulum, nisi ex malesuada enim, non maximus augue odio et dui. Fusce mollis sagittis metus, a feugiat eros laoreet eu. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Pellentesque ac risus nisl. Morbi ullamcorper ligula ut ante cursus ornare.

Vivamus at sollicitudin lorem, a venenatis purus. Etiam elementum magna tellus, at lobortis risus auctor sit amet. Aenean aliquet leo quis ligula dignissim ultricies. Integer imperdiet sem blandit finibus lobortis. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nunc porta auctor nibh ac dictum. Nunc sit amet lectus vitae nunc ullamcorper tempus. Suspendisse potenti.

Sed sodales tortor eget odio cursus, ut scelerisque felis blandit. Curabitur et lacinia massa. Proin ut aliquet elit. Curabitur pretium, augue in iaculis semper, mi diam mollis tellus, sed finibus arcu enim at purus. Nullam et egestas felis. In pellentesque vulputate purus, non tincidunt lectus hendrerit pellentesque. Etiam cursus augue eget metus placerat, non scelerisque lacus dictum. Duis sed nulla varius ligula tempus tristique. Nam nec blandit quam. Curabitur erat urna, vulputate quis interdum tempus, convallis quis turpis. Morbi non maximus velit, at volutpat nisl. Aliquam consectetur magna elit, at mollis urna faucibus et. Vivamus semper, ipsum vel molestie tempor, tortor tortor molestie justo, nec tempus metus lectus non felis.

Pellentesque rhoncus nulla nisl, ut fermentum ante tristique sed. Aliquam ligula augue, imperdiet at feugiat quis, sollicitudin id ex. Ut a eros at nulla malesuada posuere vitae eu massa. Cras id augue massa. Nulla arcu velit, laoreet ac orci in, dignissim sodales augue. Morbi luctus nibh in aliquet dictum. Mauris sit amet quam eget velit tristique faucibus porttitor sit amet diam. Nulla sed placerat velit, in placerat mi. Sed varius semper lectus nec convallis. Sed sollicitudin maximus risus, at iaculis arcu dapibus at. Nullam malesuada libero ac velit vehicula scelerisque. Sed lacinia iaculis ipsum nec varius. Duis vel commodo enim. Nulla sed nunc in justo vestibulum aliquam. Ut nibh nibh, consequat ut condimentum at, imperdiet et augue.

Vivamus arcu dolor, facilisis sodales tellus a, pellentesque mattis enim. Vivamus id vestibulum eros. Sed aliquet diam eget dictum suscipit. Nulla facilisi. Nulla venenatis metus sed semper consequat. Sed ultricies ipsum leo, vitae tincidunt tellus ultrices id. Nulla convallis, ante pulvinar facilisis congue, magna ligula volutpat massa, nec eleifend nisl risus ut est. Duis molestie erat eget nibh lobortis venenatis. Nulla facilisi. Integer maximus leo sapien, sed aliquam mi tincidunt eget.

Fusce vel lobortis tortor. Aenean at molestie orci. Sed suscipit velit metus, eu accumsan tortor malesuada a. Suspendisse egestas, mauris sit amet rutrum commodo, erat libero varius turpis, nec ultricies nisl ante in risus. Proin ut erat tellus. Duis faucibus eros tellus, ac efficitur diam ultricies at. Sed a arcu orci. Aenean lobortis, quam quis volutpat porta, enim felis lacinia nulla, sit amet sagittis lacus nibh ac urna. Aliquam efficitur metus eu vestibulum suscipit.

Vivamus vel ipsum arcu. Sed scelerisque gravida tempor. Cras porttitor porta tellus. Nulla hendrerit efficitur ultrices. Praesent ut eros eleifend, tristique risus quis, venenatis erat. Maecenas non nibh lacus. Sed id viverra augue, eget consequat enim.

Nunc at vehicula sapien, a vulputate tellus. Vivamus pellentesque nisi a convallis dignissim. Fusce ultricies egestas enim vitae bibendum. Phasellus commodo felis vulputate libero tempus varius. Donec luctus sapien quis purus eleifend varius. Nulla gravida dolor at mi blandit, posuere euismod sem commodo. Donec quis lorem suscipit, facilisis purus vel, pretium sem. Nullam ullamcorper metus vel rutrum dignissim. Duis a viverra massa. Vivamus est tellus, vehicula in rutrum in, faucibus eu mauris.

Maecenas non risus quis urna imperdiet scelerisque id nec tortor. Fusce nisi neque, ultricies vel iaculis vel, venenatis eu nisi. Aliquam pulvinar at elit a tempus. Cras laoreet elit ligula, et ornare ante faucibus nec. Maecenas congue mauris luctus ipsum auctor posuere. Ut eget ex ut nunc porta fringilla vel id urna. Maecenas tempor placerat magna, nec auctor augue iaculis non. Duis et enim porta ligula gravida lobortis et a ipsum. Nam vel urna massa. Praesent cursus arcu aliquet, facilisis quam a, rutrum arcu. Quisque congue lacus in nunc maximus, vulputate malesuada ante porttitor. Pellentesque sollicitudin placerat orci, eu imperdiet lectus facilisis id. Aenean porta nulla sed libero hendrerit sodales.

Proin ut tincidunt elit, eget pulvinar turpis. Aenean nec pretium enim. Nam vitae risus sit amet purus mollis tempus. Phasellus in volutpat enim. Aliquam turpis erat, rutrum sed consequat laoreet, rhoncus ac nisl. Phasellus sed ex sed enim viverra egestas et sed quam. Aenean pellentesque ac lacus ac lobortis. Vestibulum in egestas purus. Sed placerat erat vitae sem ultrices, et imperdiet lacus cursus. Maecenas ut nisi id est faucibus sodales sed sed sapien. Fusce tincidunt id ante non dictum. Nullam arcu nibh, sollicitudin at ex non, laoreet blandit ligula. Etiam venenatis augue eget dolor dapibus, nec interdum erat interdum.
          </p>
        </div>

      </div>
    </div>
  );
}
