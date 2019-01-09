<template>
    <div>
        <!-- id 将作为查询条件 -->
        <span :id="'/blog' + path" class="leancloud-visitors" data-flag-title="Your Article Title">
            <em class="post-meta-item-text">阅读量:</em>
            <i class="leancloud-visitors-count"></i>
        </span>
        <br>
        <br>
        <div id="vcomments"></div>
    </div>
</template>

<script>
// Register AV objects to the global
window.AV = require('leancloud-storage');

// Use import
import Valine from 'valine';

export default {
    props: ['path'],
    data() {
        return {
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