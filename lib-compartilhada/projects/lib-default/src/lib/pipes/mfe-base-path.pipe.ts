import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mfeBasePath'
})
export class MfeBasePathPipe implements PipeTransform {

  transform(url: string): string {
    //@ts-ignore
    const publicPath = __webpack_public_path__;
    const publicPathSuffix = publicPath.endsWith('/') ? '' : '/';
    const urlPrefix = url.startsWith('/') ? '' : '/';

    return `${publicPath}${publicPathSuffix}assets${urlPrefix}${url}`;
  }

}
