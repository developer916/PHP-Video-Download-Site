<a href="#" id="menu" onclick="searchByKeyword()">click me for menu</a>

<script type="text/javascript" src="assets/plugins/jquery/jquery.min.js"></script>
<script type="text/javascript">
    function searchByKeyword() {
        var results = YouTube.Search.list('id,snippet', {q: 'dogs', maxResults: 25});
        for(var i in results.items) {
            var item = results.items[i];
            Logger.log('[%s] Title: %s', item.id.videoId, item.snippet.title);
        }
    }
</script>