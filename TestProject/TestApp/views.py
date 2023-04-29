from django.shortcuts import render
from django.views.generic import TemplateView, ListView
from .models import Post


class IndexView(TemplateView):
    template_name = "index.html"


class PostListView(ListView):  # generic の ListViewクラスを継承
    model = Post  # 一覧表示させたいモデルを呼び出し
    template_name = "post_list.html"
