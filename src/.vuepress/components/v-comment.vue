<template>
    <div>
        <!-- id 将作为查询条件 -->
        <span class="leancloud-visitors" data-flag-title="Your Article Title" :id="path">
            <em class="post-meta-item-text">阅读量</em>
            <i class="leancloud-visitors-count">1000000</i>
        </span>
        <div id="vcomments"></div>
    </div>
</template>

<script>
// Register AV objects to the global
window.AV = require('leancloud-storage');

// Use import
import Valine from 'valine';

export default {
    data() {
        return {
            path:'/blog/',
            msg: 'hello'
        };
    },

    mounted() {
        new Valine({
            el: '#vcomments',
            appId: '4oO99xyPJW7JGMHGOPApNJXi-gzGzoHsz',
            appKey: 'XlgD7yMi7JuJCC6PzUHjGQT6',
            notify: false,
            verify: false,
            avatar: 'mm',
            visitor: true,
            placeholder: 'just go go'
        });
    }
};
</script>