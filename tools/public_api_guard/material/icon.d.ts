export declare function getMatIconFailedToSanitizeLiteralError(literal: SafeHtml): Error;

export declare function getMatIconFailedToSanitizeUrlError(url: SafeResourceUrl): Error;

export declare function getMatIconNameNotFoundError(iconName: string): Error;

export declare function getMatIconNoHttpProviderError(): Error;

export declare const ICON_REGISTRY_PROVIDER: {
    provide: typeof MatIconRegistry;
    deps: (Optional[] | typeof DomSanitizer)[];
    useFactory: typeof ICON_REGISTRY_PROVIDER_FACTORY;
};

export declare function ICON_REGISTRY_PROVIDER_FACTORY(parentRegistry: MatIconRegistry, httpClient: HttpClient, sanitizer: DomSanitizer, document?: any, errorHandler?: ErrorHandler): MatIconRegistry;

export interface IconOptions {
    viewBox?: string;
}

export declare const MAT_ICON_LOCATION: InjectionToken<MatIconLocation>;

export declare function MAT_ICON_LOCATION_FACTORY(): MatIconLocation;

export declare class MatIcon extends _MatIconMixinBase implements OnChanges, OnInit, AfterViewChecked, CanColor, OnDestroy {
    fontIcon: string;
    fontSet: string;
    inline: boolean;
    svgIcon: string;
    constructor(elementRef: ElementRef<HTMLElement>, _iconRegistry: MatIconRegistry, ariaHidden: string,
    _location?: MatIconLocation | undefined);
    ngAfterViewChecked(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngOnDestroy(): void;
    ngOnInit(): void;
}

export interface MatIconLocation {
    getPathname: () => string;
}

export declare class MatIconModule {
}

export declare class MatIconRegistry implements OnDestroy {
    constructor(_httpClient: HttpClient, _sanitizer: DomSanitizer, document: any, _errorHandler?: ErrorHandler | undefined);
    addSvgIcon(iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconInNamespace(namespace: string, iconName: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconLiteral(iconName: string, literal: SafeHtml, options?: IconOptions): this;
    addSvgIconLiteralInNamespace(namespace: string, iconName: string, literal: SafeHtml, options?: IconOptions): this;
    addSvgIconSet(url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconSetInNamespace(namespace: string, url: SafeResourceUrl, options?: IconOptions): this;
    addSvgIconSetLiteral(literal: SafeHtml, options?: IconOptions): this;
    addSvgIconSetLiteralInNamespace(namespace: string, literal: SafeHtml, options?: IconOptions): this;
    classNameForFontAlias(alias: string): string;
    getDefaultFontSetClass(): string;
    getNamedSvgIcon(name: string, namespace?: string): Observable<SVGElement>;
    getSvgIconFromUrl(safeUrl: SafeResourceUrl): Observable<SVGElement>;
    ngOnDestroy(): void;
    registerFontClassAlias(alias: string, className?: string): this;
    setDefaultFontSetClass(className: string): this;
}
