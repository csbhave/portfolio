
    $(document).ready(function(){
        $(".service-content").waypoint(function(direction){
            $(".service-box").addClass("animated zoomIn");
        },{
            offset:'50%'
        })
        $(".skill-content").waypoint(function(direction){
            $(".skill-box").addClass("animated zoomIn");
        },{
            offset:'50%'
        })
        $(".about-content").waypoint(function(direction){
            $(".img-box").addClass("animated fadeInLeft");
        },{
            offset:'50%'
        })
        $(".about-content").waypoint(function(direction){
            $(".info-box").addClass("animated fadeInRight");
        },{
            offset:'50%'
        })
  })