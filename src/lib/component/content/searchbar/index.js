
//搜索
import { SearchBar } from './searchbar'

/**
 * 创建搜索框
 * @return {[type]} [description]
 */

export function extendSearchBar(activitProto) {

    activitProto.createSearchBar = function () {
        var options = {
            parent: this.rootNode
        }
        if (this.searchBar) {
            //如果上次只是隐藏则可以恢复
            this.searchBar.restore();
        } else {
            this.searchBar = new SearchBar(options);
        }
    }

}